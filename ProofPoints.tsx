import { proofPoints } from "@/content/profile";

export function ProofPoints() {
  return (
    <div className="proof-grid" aria-label="Selected proof points">
      {proofPoints.map((point) => (
        <article key={point.label} className="proof-point">
          <strong>{point.value}</strong>
          <span>{point.label}</span>
        </article>
      ))}
    </div>
  );
}
