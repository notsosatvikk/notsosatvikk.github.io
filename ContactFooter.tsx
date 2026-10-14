import Image from "next/image";
import { contact } from "@/content/profile";

export function ContactFooter() {
  return (
    <footer id="connect" className="contact-footer" aria-labelledby="contact-title">
      <div className="contact-noise" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => <span key={index} />)}
      </div>
      <div className="section-shell contact-shell">
        <div className="contact-main">
          <p className="chapter-number">04 / CONNECT</p>
          <h2 id="contact-title">Let&apos;s build the<br /><em>next move.</em></h2>
          <p className="contact-intro">If you are building something data-informed, useful and human, I would love to hear about it.</p>

          <div className="contact-links" aria-label="Contact links">
            <a href={`mailto:${contact.email}`}><span>Email</span>{contact.email}<b aria-hidden="true">↗</b></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>satvikgupta07<b aria-hidden="true">↗</b></a>
            <a href={contact.phoneHref}><span>Phone</span>{contact.phoneDisplay}<b aria-hidden="true">↗</b></a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span>notsosatvikk<b aria-hidden="true">↗</b></a>
          </div>
        </div>

        <div className="resume-card">
          <div className="resume-portrait">
            <Image src="/images/portrait-formal.webp" alt="Satvik Gupta in formal attire" width={560} height={832} sizes="(max-width: 767px) 65vw, 28vw" quality={86} />
          </div>
          <p className="eyebrow">ONE PAGE. THE FORMAL VERSION.</p>
          <a className="resume-download" href={contact.resume} download="SatvikGupta_Resume.pdf">
            Download resume <span aria-hidden="true">↓</span>
          </a>
          <a className="resume-view" href={contact.resume} target="_blank" rel="noopener noreferrer">View in browser ↗</a>
        </div>
      </div>

      <div className="section-shell footer-base">
        <p>© {new Date().getFullYear()} Satvik Gupta · Los Angeles, California</p>
        <a href="#manifesto-title">Back to the signal ↑</a>
      </div>
    </footer>
  );
}
