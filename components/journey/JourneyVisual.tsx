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
    <div className="modules-visual" aria-label="Learning modules becoming a structured path">
      <div className="module scattered">PYTHON</div>
      <div className="module scattered">MATH</div>
      <div className="module scattered">READINESS</div>
      <div className="module path">01 · ASSESS</div>
      <div className="module path">02 · PRACTICE</div>
      <div className="module path">03 · ARRIVE READY</div>
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
