import { capabilities } from "@/content/profile";
import { HomePortrait } from "./HomePortrait";
import { ProofPoints } from "./ProofPoints";

export function HomeSection() {
  return (
    <section id="home" className="home-section chapter" aria-labelledby="home-title">
      <div className="section-shell">
        <p className="chapter-number">01 / HOME</p>
        <h2 id="home-title" className="sr-only">About Satvik Gupta</h2>
        <div className="home-cover">
          <div className="home-copy home-copy-left">
            <p className="eyebrow">THE SHORT VERSION</p>
            <p className="display-copy">
              I grew up thinking spreadsheets were where creativity went to die.
            </p>
            <p>
              Then my first coding class showed me that data could move, explain and build. Since then, I have been drawn to messy questions where research, product thinking and business decisions meet.
            </p>
          </div>

          <HomePortrait />

          <div className="home-copy home-copy-right">
            <p className="eyebrow">NOW</p>
            <p className="display-copy">
              Product thinking with an analyst's eye and a marketer's feel for people.
            </p>
            <p>
              I am pursuing an MS in Business Analytics at USC Marshall after studying Computer Engineering at NMIMS. My work spans product, growth, campaign analytics, AI and the systems that help teams make a better next move.
            </p>
            <a className="primary-link" href="#connect">Let&apos;s connect <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <ProofPoints />
      </div>

      <div className="capability-strip" aria-label="Selected capabilities">
        <div className="section-shell capability-list">
          {capabilities.map((capability, index) => (
            <span key={capability}><b>0{index + 1}</b>{capability}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
