"use client";

import {
  type KeyboardEvent,
  type PointerEvent,
  useEffect,
  useRef,
} from "react";

const MIN_THUMB_HEIGHT = 48;

type ScrollMetrics = {
  maxScroll: number;
  maxThumbTravel: number;
  thumbHeight: number;
};

type DragState = {
  pointerId: number;
  startClientY: number;
  startScrollY: number;
};

export default function CustomScrollbar() {
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<ScrollMetrics>({
    maxScroll: 0,
    maxThumbTravel: 0,
    thumbHeight: MIN_THUMB_HEIGHT,
  });
  const dragRef = useRef<DragState | null>(null);

  useEffect(() => {
    const scrollbar = scrollbarRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!scrollbar || !track || !thumb) return;

    let animationFrame: number | null = null;

    const syncThumb = () => {
      animationFrame = null;

      const { maxScroll, maxThumbTravel } = metricsRef.current;
      const progress =
        maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      const thumbPosition = progress * maxThumbTravel;
      const progressPercentage = Math.round(progress * 100);

      thumb.style.transform = `translate3d(0, ${thumbPosition}px, 0)`;
      thumb.setAttribute("aria-valuenow", String(progressPercentage));
      thumb.setAttribute("aria-valuetext", `${progressPercentage}%`);
    };

    const scheduleSync = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(syncThumb);
    };

    const measure = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const trackHeight = track.clientHeight;
      const maxScroll = Math.max(0, documentHeight - viewportHeight);
      const thumbHeight = Math.min(
        trackHeight,
        Math.max(
          MIN_THUMB_HEIGHT,
          trackHeight * (viewportHeight / documentHeight),
        ),
      );

      metricsRef.current = {
        maxScroll,
        maxThumbTravel: Math.max(0, trackHeight - thumbHeight),
        thumbHeight,
      };

      thumb.style.height = `${thumbHeight}px`;
      scrollbar.dataset.visible = String(maxScroll > 0);
      scheduleSync();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.documentElement);

    document.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      resizeObserver.disconnect();
      document.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", measure);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      document.documentElement.removeAttribute("data-scrollbar-dragging");
    };
  }, []);

  const handleTrackPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    const { maxScroll, maxThumbTravel, thumbHeight } = metricsRef.current;
    if (maxScroll === 0 || maxThumbTravel === 0) return;

    const trackRect = track.getBoundingClientRect();
    const targetPosition = Math.min(
      maxThumbTravel,
      Math.max(0, event.clientY - trackRect.top - thumbHeight / 2),
    );

    window.scrollTo({
      top: (targetPosition / maxThumbTravel) * maxScroll,
      behavior: "auto",
    });
  };

  const handleThumbPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    event.preventDefault();
    event.stopPropagation();

    dragRef.current = {
      pointerId: event.pointerId,
      startClientY: event.clientY,
      startScrollY: window.scrollY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    document.documentElement.dataset.scrollbarDragging = "true";
  };

  const handleThumbPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const { maxScroll, maxThumbTravel } = metricsRef.current;
    if (maxScroll === 0 || maxThumbTravel === 0) return;

    const pointerTravel = event.clientY - drag.startClientY;
    const scrollPosition =
      drag.startScrollY + (pointerTravel / maxThumbTravel) * maxScroll;

    window.scrollTo({ top: scrollPosition, behavior: "auto" });
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    dragRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    document.documentElement.removeAttribute("data-scrollbar-dragging");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const viewportStep = window.innerHeight * 0.9;
    const keyActions: Partial<Record<string, () => void>> = {
      ArrowUp: () => window.scrollBy({ top: -40, behavior: "auto" }),
      ArrowDown: () => window.scrollBy({ top: 40, behavior: "auto" }),
      PageUp: () => window.scrollBy({ top: -viewportStep, behavior: "auto" }),
      PageDown: () => window.scrollBy({ top: viewportStep, behavior: "auto" }),
      Home: () => window.scrollTo({ top: 0, behavior: "auto" }),
      End: () =>
        window.scrollTo({
          top: metricsRef.current.maxScroll,
          behavior: "auto",
        }),
    };
    const action = keyActions[event.key];

    if (!action) return;

    event.preventDefault();
    action();
  };

  const scrollByStep = (direction: -1 | 1) => {
    window.scrollBy({ top: direction * 80, behavior: "auto" });
  };

  return (
    <div
      ref={scrollbarRef}
      className="custom-scrollbar"
      data-visible="false"
    >
      <button
        type="button"
        className="custom-scrollbar-arrow"
        aria-label="Rolar para cima"
        onClick={() => scrollByStep(-1)}
      >
        <svg
          viewBox="0 0 10 8"
          width="8"
          height="7"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M4.28 1.25a.9.9 0 0 1 1.44 0l3.1 4.1A.9.9 0 0 1 8.1 6.8H1.9a.9.9 0 0 1-.72-1.45l3.1-4.1Z"
          />
        </svg>
      </button>
      <div
        ref={trackRef}
        className="custom-scrollbar-track"
        onPointerDown={handleTrackPointerDown}
      >
        <div
          ref={thumbRef}
          className="custom-scrollbar-thumb"
          role="scrollbar"
          aria-label="Rolagem da página"
          aria-controls="page-scroll-content"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handleThumbPointerDown}
          onPointerMove={handleThumbPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
        />
      </div>
      <button
        type="button"
        className="custom-scrollbar-arrow custom-scrollbar-arrow-down"
        aria-label="Rolar para baixo"
        onClick={() => scrollByStep(1)}
      >
        <svg
          viewBox="0 0 10 8"
          width="8"
          height="7"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M4.28 1.25a.9.9 0 0 1 1.44 0l3.1 4.1A.9.9 0 0 1 8.1 6.8H1.9a.9.9 0 0 1-.72-1.45l3.1-4.1Z"
          />
        </svg>
      </button>
    </div>
  );
}
