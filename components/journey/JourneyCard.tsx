import type { JourneyEntry } from "@/content/types";
import { JourneyVisual } from "./JourneyVisual";

export function JourneyCard({ entry, index, active, desktop }: { entry: JourneyEntry; index: number; active: boolean; desktop: boolean }) {
  return (
    <article
      id={`journey-card-${entry.id}`}
      className={`journey-card palette-${entry.palette} ${active ? "is-active" : ""}`}
      aria-hidden={desktop && !active}
    >
      <div className="journey-card-topline">
        <span>{entry.dates}</span>
        <span>{entry.location}</span>
        {entry.status && <strong>{entry.status}</strong>}
      </div>
      <div className="journey-card-body">
        <div className="journey-story">
          <p className="eyebrow">CHAPTER {String(index + 1).padStart(2, "0")}</p>
          <h3>{entry.organization}</h3>
          <p className="journey-role">{entry.title}</p>
          <p className="journey-challenge">{entry.challenge}</p>
          <ul>
            {entry.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
          </ul>
        </div>
        <div className="journey-evidence">
          <JourneyVisual entry={entry} />
          <div className="chip-row">
            {entry.evidence.map((item) => <span key={item}>{item}</span>)}
          </div>
          {entry.note && <blockquote>{entry.note}</blockquote>}
        </div>
      </div>
    </article>
  );
}
