import Image from "next/image";
import type { Project } from "@/content/types";

export function ProjectPanel({ project, index, active }: { project: Project; index: number; active: boolean }) {
  return (
    <article
      id={`project-panel-${project.id}`}
      className={`project-panel ${active ? "is-active" : ""}`}
      role="tabpanel"
      aria-labelledby={`project-tab-${project.id}`}
      hidden={!active}
    >
      <div className="project-visual">
        <div
          className={`project-image-frame project-image-${project.id}`}
          style={{ "--project-accent": project.accent } as React.CSSProperties}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 1023px) 92vw, 47vw"
            quality={86}
            style={{ objectPosition: project.image.position ?? "center" }}
          />
          <span className="project-image-label">FILE {String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="project-metrics">
          {project.evidence.map((item) => (
            <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </div>

      <div className="project-story">
        <p className="eyebrow">{project.subtitle}</p>
        <h3>{project.outcome}</h3>
        <dl>
          <div><dt>Problem</dt><dd>{project.problem}</dd></div>
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          <div>
            <dt>Key decisions</dt>
            <dd><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></dd>
          </div>
        </dl>
        <div className="tool-row" aria-label="Tools used">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </div>
    </article>
  );
}
