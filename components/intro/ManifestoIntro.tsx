"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ManifestoIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setResolved(true);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches) {
        stage.style.setProperty("--intro-progress", "1");
        stage.style.setProperty("--intro-light", "70%");
        return;
      }
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      stage.style.setProperty("--intro-progress", progress.toFixed(3));
      stage.style.setProperty("--intro-light", `${(progress * 70).toFixed(1)}%`);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reducedMotion.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reducedMotion.removeEventListener("change", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const lens = lensRef.current;
    const stage = stageRef.current;
    if (!lens || !stage) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const moveLens = (event: PointerEvent) => {
      if (resolved || reducedMotion.matches || coarsePointer.matches) return;
      const rect = lens.getBoundingClientRect();
      lens.style.setProperty("--lens-x", `${event.clientX - rect.left}px`);
      lens.style.setProperty("--lens-y", `${event.clientY - rect.top}px`);
    };

    const placeLens = (event: PointerEvent) => {
      if (resolved || reducedMotion.matches || !coarsePointer.matches) return;
      const rect = lens.getBoundingClientRect();
      lens.style.setProperty("--lens-x", `${event.clientX - rect.left}px`);
      lens.style.setProperty("--lens-y", `${event.clientY - rect.top}px`);
    };

    stage.addEventListener("pointermove", moveLens);
    stage.addEventListener("pointerdown", placeLens);
    return () => {
      stage.removeEventListener("pointermove", moveLens);
      stage.removeEventListener("pointerdown", placeLens);
    };
  }, [resolved]);

  return (
    <section ref={sectionRef} className="manifesto" aria-labelledby="manifesto-title">
      <div ref={stageRef} className="manifesto-stage">
        <div className="manifesto-grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
        </div>
        <p className="manifesto-kicker">SATVIK GUPTA — PRODUCT × ANALYTICS × GROWTH</p>
        <h1 id="manifesto-title" className="manifesto-title">
          <span>I find the <em>signal.</em></span>
          <span>Then I build the next move.</span>
        </h1>
        <div ref={lensRef} className={`signal-lens${resolved ? " is-resolved" : ""}`}>
          <div className="lens-noise" aria-hidden="true">
            {['01','?','0.82','+24%','AI','↗','150+','::','1M+','[ ]','WHY','DATA'].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </div>
          <div className="lens-reveal" aria-hidden={!resolved}>
            <div className="lens-copy">
              <p>THE SIGNAL BENEATH THE NOISE</p>
              <strong>Product instinct.<br/><em>Analytical proof.</em><br/>Human outcomes.</strong>
              <small>I work where user needs, commercial context and technical possibility become one clear next move.</small>
            </div>
            <div className="lens-portrait" aria-hidden="true">
              <span></span>
              <Image src="/images/portrait-cutout.webp" alt="" width={541} height={697} priority sizes="(max-width: 767px) 58vw, 36vw" />
            </div>
            <div className="lens-proof lens-proof-one"><b>150+</b><span>prospects structured</span></div>
            <div className="lens-proof lens-proof-two"><b>85%</b><span>validation accuracy</span></div>
            <div className="lens-proof lens-proof-three"><b>1M+</b><span>records explored</span></div>
            <div className="lens-proof lens-proof-four"><b>2nd</b><span>globally</span></div>
          </div>
          <div className="lens-ring" aria-hidden="true"><span>MOVE TO FIND THE SIGNAL</span></div>
          <button
            className="lens-control"
            type="button"
            aria-pressed={resolved}
            onClick={() => setResolved((value) => !value)}
          >
            <span aria-hidden="true">{resolved ? "×" : "◉"}</span>
            {resolved ? "Return to the noise" : "Resolve the whole picture"}
          </button>
          <p className="lens-hint" aria-live="polite">
            {resolved ? "The through-line: product × analytics × growth." : <><span className="lens-hint-desktop">Move the lens. Click when you are ready to see the system.</span><span className="lens-hint-mobile">Tap anywhere to move the lens. Swipe up to continue.</span></>}
          </p>
        </div>
        <div className="manifesto-resolve" aria-hidden="true"><span /><span /><span /></div>
        <a className="scroll-cue" href="#home">
          <span>Scroll to find the signal</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
