"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/content/projects";
import { ProjectPanel } from "./ProjectPanel";

export function ProjectFile() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
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
      setActive(Math.min(projects.length - 1, Math.round(progress * (projects.length - 1))));
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

  const selectProject = (index: number) => {
    setActive(index);
    if (!desktop) return;
    const section = sectionRef.current;
    if (!section) return;
    const top = window.scrollY + section.getBoundingClientRect().top;
    const travel = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (index / Math.max(projects.length - 1, 1)) * travel + 2, behavior: "smooth" });
  };

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % projects.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    selectProject(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section chapter"
      aria-labelledby="projects-title"
      style={{ "--project-steps": projects.length } as React.CSSProperties}
    >
      <div className="project-stage section-shell">
        <header className="project-heading">
          <p className="chapter-number">03 / PROJECT FILE</p>
          <h2 id="projects-title">Proof, not<br /><em>polish alone.</em></h2>
          <p>The artifact matters. The decision behind it matters more.</p>
        </header>

        <div className="folder-wrap">
          <div className="folder-tabs" role="tablist" aria-label="Selected projects">
            {projects.map((project, index) => (
              <button
                key={project.id}
                ref={(node) => { tabRefs.current[index] = node; }}
                id={`project-tab-${project.id}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls={`project-panel-${project.id}`}
                tabIndex={active === index ? 0 : -1}
                className={active === index ? "is-active" : ""}
                style={{ "--tab-accent": project.accent } as React.CSSProperties}
                onClick={() => selectProject(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>{project.label}
              </button>
            ))}
          </div>

          <div className="project-folder">
            <div className="paper-edge edge-one" aria-hidden="true" />
            <div className="paper-edge edge-two" aria-hidden="true" />
            <div className="project-folder-inner">
              {projects.map((project, index) => (
                <ProjectPanel key={project.id} project={project} index={index} active={active === index} />
              ))}
            </div>
            <div className="folder-progress" aria-label={`Project ${active + 1} of ${projects.length}`}>
              <span style={{ width: `${((active + 1) / projects.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
      <noscript><style>{`.project-panel[hidden]{display:grid!important}.project-panel{position:relative!important;opacity:1!important}`}</style></noscript>
    </section>
  );
}
