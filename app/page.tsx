import { ContactFooter } from "@/components/contact/ContactFooter";
import { BeyondBuild } from "@/components/home/BeyondBuild";
import { HomeSection } from "@/components/home/HomeSection";
import { ManifestoIntro } from "@/components/intro/ManifestoIntro";
import { JourneySection } from "@/components/journey/JourneySection";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { ProjectFile } from "@/components/projects/ProjectFile";
import { contact } from "@/content/profile";
import { siteUrl } from "@/lib/seo";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contact.name,
    url: siteUrl.toString(),
    email: `mailto:${contact.email}`,
    telephone: "+12133542406",
    address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Southern California, Marshall School of Business" },
      { "@type": "CollegeOrUniversity", name: "SVKM's Narsee Monji Institute of Management Studies" }
    ],
    sameAs: [contact.linkedin, contact.github]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <noscript><style>{`.floating-header{opacity:1!important;pointer-events:auto!important;transform:translate(-50%,0)!important}`}</style></noscript>
      <FloatingNav />
      <ManifestoIntro />
      <main id="main">
        <HomeSection />
        <JourneySection />
        <ProjectFile />
        <BeyondBuild />
      </main>
      <ContactFooter />
    </>
  );
}
