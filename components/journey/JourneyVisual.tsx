import Image from "next/image";
import type { JourneyEntry } from "@/content/types";

function PipelineVisual() {
  const stages = ["IDENTIFIED", "CONTACTED", "CONVERSATION", "AGREED", "LIVE"];
  return (
    <div className="pipeline-visual" aria-label="Creator acquisition pipeline illustration">
      <div className="pipeline-noise" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
      </div>
      <div className="pipeline-line" aria-hidden="true" />
      <div className="pipeline-stages">
        {stages.map((stage, index) => (
          <div key={stage} className="pipeline-stage">
            <b>{String(index + 1).padStart(2, "0")}</b>
            <span>{stage}</span>
          </div>
        ))}
      </div>
      <div className="dashboard-mini" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
    </div>
  );
}

function ModulesVisual() {
  return (
    <div className="modules-visual" aria-label="Incoming student readiness signals becoming a structured learning roadmap">
      <div className="readiness-heading">
        <span>PROGRAM READINESS SYSTEM</span>
        <strong>Signals in. A clearer start out.</strong>
      </div>

      <div className="readiness-sources" aria-hidden="true">
        <div><span>01</span><b>Python</b><small>coding foundations</small></div>
        <div><span>02</span><b>Mathematics</b><small>quantitative readiness</small></div>
        <div><span>03</span><b>Student needs</b><small>experience gaps</small></div>
      </div>

      <div className="readiness-transform" aria-hidden="true">
        <span>SCATTERED INPUTS</span>
        <i />
        <b>READINESS GAPS</b>
        <i />
        <span>CONTENT ROADMAP</span>
      </div>

      <div className="learning-path" aria-hidden="true">
        <div><span>01</span><strong>Assess</strong><small>find the gaps</small></div>
        <div><span>02</span><strong>Structure</strong><small>sequence the content</small></div>
        <div><span>03</span><strong>Arrive ready</strong><small>start with confidence</small></div>
      </div>
    </div>
  );
}

export function JourneyVisual({ entry }: { entry: JourneyEntry }) {
  if (entry.visual === "pipeline") return <PipelineVisual />;
  if (entry.visual === "modules") return <ModulesVisual />;

  if (entry.image) {
    return (
      <div className={`journey-image ${entry.visual === "blueprint" ? "blueprint-image" : ""}`}>
        <Image
          src={entry.image.src}
          alt={entry.image.alt}
          width={entry.image.width}
          height={entry.image.height}
          sizes="(max-width: 1023px) 92vw, 50vw"
          quality={86}
        />
        {entry.visual === "blueprint" && <div className="blueprint-grid" aria-hidden="true" />}
      </div>
    );
  }

  return null;
}
