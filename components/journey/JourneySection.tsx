"use client";

import { useEffect, useRef, useState } from "react";
import { visibleJourney } from "@/content/journey";
import { JourneyCard } from "./JourneyCard";

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const desktopQuery = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const updateMode = () => setDesktop(desktopQuery.matches);
    const update = () => {
      frame = 0;
      if (!desktopQuery.matches) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      setActive(Math.min(visibleJourney.length - 1, Math.round(progress * (visibleJourney.length - 1))));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    updateMode();
    update();
    desktopQuery.addEventListener("change", updateMode);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      desktopQuery.removeEventListener("change", updateMode);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (desktop) return;
    const cards = visibleJourney
      .map((entry) => document.getElementById(`journey-card-${entry.id}`))
      .filter((card): card is HTMLElement => Boolean(card));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        const index = cards.indexOf(current.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.2, 0.5] }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [desktop]);

  const goTo = (index: number) => {
    setActive(index);
    if (!desktop) {
      document.getElementById(`journey-card-${visibleJourney[index].id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const section = sectionRef.current;
    if (!section) return;
    const top = window.scrollY + section.getBoundingClientRect().top;
    const travel = section.offsetHeight - window.innerHeight;
    const target = top + (index / Math.max(visibleJourney.length - 1, 1)) * travel + 2;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="journey-section chapter"
      aria-labelledby="journey-title"
      style={{ "--journey-steps": visibleJourney.length } as React.CSSProperties}
    >
      <div className="journey-stage section-shell">
        <aside className="journey-index" aria-label="Career and education chapters">
          <p className="chapter-number">02 / JOURNEY</p>
          <h2 id="journey-title">Career &amp;<br /><em>Education</em></h2>
          <p className="journey-index-intro">Six chapters. One through-line: turn ambiguity into a useful next move.</p>
          <div className="journey-index-list">
            {visibleJourney.map((entry, index) => {
              const firstInGroup = index === 0 || visibleJourney[index - 1].group !== entry.group;
              return (
                <div key={entry.id} className="journey-index-item">
                  {firstInGroup && <p>{entry.group}</p>}
                  <button
                    type="button"
                    className={active === index ? "is-active" : ""}
                    aria-current={active === index ? "step" : undefined}
                    aria-controls={`journey-card-${entry.id}`}
                    onClick={() => goTo(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {entry.organization.replace("SVKM's Narsee Monji Institute of Management Studies", "NMIMS").replace("USC Marshall Data Science and Operations", "USC Marshall DSO").replace("USC Marshall School of Business", "USC Marshall")}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="journey-progress" aria-hidden="true"><span style={{ transform: `scaleY(${(active + 1) / visibleJourney.length})` }} /></div>
        </aside>

        <div className="journey-cards">
          {visibleJourney.map((entry, index) => (
            <JourneyCard key={entry.id} entry={entry} index={index} active={active === index} desktop={desktop} />
          ))}
        </div>
      </div>
      <noscript><style>{`.journey-card{position:relative!important;opacity:1!important;visibility:visible!important;transform:none!important}`}</style></noscript>
    </section>
  );
}
