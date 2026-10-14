import { beyondBuild } from "@/content/profile";

export function BeyondBuild() {
  return (
    <section className="beyond-section" aria-labelledby="beyond-title">
      <div className="section-shell">
        <div className="beyond-heading">
          <p className="chapter-number">BEYOND THE BUILD</p>
          <h2 id="beyond-title">A little more<br /><em>signal.</em></h2>
        </div>
        <div className="beyond-grid">
          {beyondBuild.map((item, index) => (
            <article key={item.label}>
              <span>0{index + 1}</span>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
