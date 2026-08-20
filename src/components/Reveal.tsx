"use client";

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  group?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  group = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = group
    ? {}
    : ({ transitionDelay: `${delay}ms`, "--reveal-y": `${y}px` } as unknown as CSSProperties);

  return (
    <div
      ref={ref}
      className={`${group ? "reveal-group" : "reveal"} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
