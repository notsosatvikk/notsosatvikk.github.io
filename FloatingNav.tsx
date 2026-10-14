"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" }
] as const;

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const home = document.getElementById("home");
    if (!home) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { rootMargin: "-8% 0px 0px 0px", threshold: 0 }
    );
    observer.observe(home);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const candidates = entries.filter((entry) => entry.isIntersecting);
        if (!candidates.length) return;
        candidates.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActive(candidates[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const sheet = sheetRef.current;
    const focusable = sheet?.querySelectorAll<HTMLElement>("a, button") ?? [];
    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = priorOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <header className={`floating-header ${visible ? "is-visible" : ""} ${active === "connect" ? "on-dark" : ""}`}>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a className="nav-brand" href="#home" aria-label="Satvik Gupta, home">SG</a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? "page" : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mobile-nav-shell">
        <a className="nav-brand" href="#home" aria-label="Satvik Gupta, home">SG</a>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </div>

      {open && (
        <div className="menu-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            ref={sheetRef}
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
            <p className="eyebrow">Navigate</p>
            {links.map((link, index) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} aria-current={active === link.id ? "page" : undefined}>
                <span>0{index + 1}</span>{link.label}
              </a>
            ))}
            <a className="mobile-resume-link" href="/SatvikGupta_Resume.pdf" download>Download resume ↘</a>
          </div>
        </div>
      )}
    </header>
  );
}
