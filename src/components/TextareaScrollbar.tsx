"use client";

import {
  type RefObject,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const MIN_THUMB_HEIGHT = 32;

type Props = {
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  onVisibilityChange?: (visible: boolean) => void;
};

export default function TextareaScrollbar({ textareaRef, onVisibilityChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startClientY: number;
    startScrollTop: number;
  } | null>(null);
  const [visible, setVisible] = useState(false);

  const syncThumb = useCallback(() => {
    const textarea = textareaRef.current;
    const thumb = thumbRef.current;
    const track = trackRef.current;
    if (!textarea || !thumb || !track) return;

    const maxScroll = textarea.scrollHeight - textarea.clientHeight;
    if (maxScroll <= 0) {
      setVisible(false);
      onVisibilityChange?.(false);
      return;
    }

    setVisible(true);
    onVisibilityChange?.(true);

    const trackHeight = track.clientHeight;
    const thumbHeight = Math.min(
      trackHeight,
      Math.max(MIN_THUMB_HEIGHT, trackHeight * (textarea.clientHeight / textarea.scrollHeight)),
    );
    const maxTravel = trackHeight - thumbHeight;
    const progress = Math.min(1, Math.max(0, textarea.scrollTop / maxScroll));
    const thumbY = progress * maxTravel;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translate3d(0, ${thumbY}px, 0)`;
  }, [textareaRef]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const handleScroll = () => {
      requestAnimationFrame(syncThumb);
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(syncThumb);
    });

    textarea.addEventListener("scroll", handleScroll, { passive: true });
    textarea.addEventListener("input", syncThumb, { passive: true });
    resizeObserver.observe(textarea);
    syncThumb();

    return () => {
      textarea.removeEventListener("scroll", handleScroll);
      textarea.removeEventListener("input", syncThumb);
      resizeObserver.disconnect();
    };
  }, [textareaRef, syncThumb]);

  const handleTrackPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.button !== 0) return;

    const textarea = textareaRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!textarea || !track || !thumb) return;

    const maxScroll = textarea.scrollHeight - textarea.clientHeight;
    if (maxScroll <= 0) return;

    const trackHeight = track.clientHeight;
    const thumbHeight = thumb.clientHeight;
    const maxTravel = trackHeight - thumbHeight;

    const trackRect = track.getBoundingClientRect();
    const targetPosition = Math.min(
      maxTravel,
      Math.max(0, event.clientY - trackRect.top - thumbHeight / 2),
    );

    textarea.scrollTop = (targetPosition / maxTravel) * maxScroll;
  };

  const handleThumbPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    const textarea = textareaRef.current;
    if (!textarea) return;

    event.preventDefault();
    event.stopPropagation();

    dragRef.current = {
      pointerId: event.pointerId,
      startClientY: event.clientY,
      startScrollTop: textarea.scrollTop,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleThumbPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const textarea = textareaRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!textarea || !track || !thumb) return;

    const maxScroll = textarea.scrollHeight - textarea.clientHeight;
    if (maxScroll <= 0) return;

    const trackHeight = track.clientHeight;
    const thumbHeight = thumb.clientHeight;
    const maxTravel = trackHeight - thumbHeight;
    if (maxTravel <= 0) return;

    const pointerTravel = event.clientY - drag.startClientY;
    const newScrollTop =
      drag.startScrollTop + (pointerTravel / maxTravel) * maxScroll;

    textarea.scrollTop = Math.min(maxScroll, Math.max(0, newScrollTop));
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    dragRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const scrollByStep = (direction: -1 | 1) => {
    textareaRef.current?.scrollBy({ top: direction * 40, behavior: "auto" });
  };

  return (
    <div className={`textarea-scrollbar ${visible ? "" : "invisible"}`}>
      <button
        type="button"
        className="textarea-scrollbar-arrow"
        tabIndex={-1}
        aria-label="Rolar para cima"
        onClick={() => scrollByStep(-1)}
      >
        <svg viewBox="0 0 10 8" width="8" height="7" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.28 1.25a.9.9 0 0 1 1.44 0l3.1 4.1A.9.9 0 0 1 8.1 6.8H1.9a.9.9 0 0 1-.72-1.45l3.1-4.1Z"
          />
        </svg>
      </button>
      <div
        ref={trackRef}
        className="textarea-scrollbar-track"
        onPointerDown={handleTrackPointerDown}
      >
        <div
          ref={thumbRef}
          className="textarea-scrollbar-thumb"
          role="scrollbar"
          aria-label="Rolagem da mensagem"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
          tabIndex={0}
          onPointerDown={handleThumbPointerDown}
          onPointerMove={handleThumbPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
        />
      </div>
      <button
        type="button"
        className="textarea-scrollbar-arrow textarea-scrollbar-arrow-down"
        tabIndex={-1}
        aria-label="Rolar para baixo"
        onClick={() => scrollByStep(1)}
      >
        <svg viewBox="0 0 10 8" width="8" height="7" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.28 1.25a.9.9 0 0 1 1.44 0l3.1 4.1A.9.9 0 0 1 8.1 6.8H1.9a.9.9 0 0 1-.72-1.45l3.1-4.1Z"
          />
        </svg>
      </button>
    </div>
  );
}
