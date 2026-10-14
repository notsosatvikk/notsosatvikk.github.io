"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HomePortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const portrait = portraitRef.current;
    if (!frame || !portrait || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    const move = (event: PointerEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
      portrait.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    };
    const reset = () => { portrait.style.transform = "translate3d(0, 0, 0)"; };
    frame.addEventListener("pointermove", move);
    frame.addEventListener("pointerleave", reset);
    return () => {
      frame.removeEventListener("pointermove", move);
      frame.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={frameRef} className="portrait-frame">
      <span className="portrait-note portrait-note-top">curious by default</span>
      <span className="portrait-note portrait-note-bottom">building by choice</span>
      <div className="portrait-halo" aria-hidden="true" />
      <div ref={portraitRef} className="portrait-image-wrap">
        <Image
          src="/images/portrait-cutout.webp"
          alt="Satvik Gupta smiling"
          width={541}
          height={697}
          priority
          sizes="(max-width: 767px) 76vw, (max-width: 1100px) 40vw, 33vw"
          quality={90}
        />
      </div>
    </div>
  );
}
