import type { JourneyEntry } from "./types";

export const journeyEntries: JourneyEntry[] = [
  {
    id: "goelite",
    visible: true,
    group: "Career",
    organization: "GoElite, Inc.",
    location: "Pasadena, California",
    dates: "June 2026 – September 2026",
    title: "Campaign Marketing and Business Development Intern",
    status: "Latest chapter",
    challenge: "Build a trustworthy acquisition channel for international students making high-stakes, regulated decisions.",
    contributions: [
      "Built and segmented a 150+ prospect pipeline by audience fit and partnership potential.",
      "Managed creator partnerships from sourcing and negotiation through briefing, revision, approval and publishing.",
      "Defined a full-funnel measurement system spanning reach, traffic, leads, efficiency and partner output.",
      "Built campaign and team dashboards that replaced scattered manual reporting.",
      "Used tracked links, landing pages and posting windows for directional attribution without overstating certainty."
    ],
    evidence: ["150+ prospects", "End-to-end creator pipeline", "Dashboards built from scratch", "Analytics to action"],
    note: "The first dashboard showed everything. The useful version focused on the few numbers a decision actually turns on.",
    palette: "coral",
    visual: "pipeline"
  },
  {
    id: "usc-dso",
    visible: true,
    group: "Career",
    organization: "USC Marshall Data Science and Operations",
    location: "Los Angeles, California",
    dates: "March 2026 – June 2026",
    title: "Program Analytics and Marketing Associate",
    challenge: "Turn uneven incoming-student readiness into a clearer and more coherent start to the MSBA program.",
    contributions: [
      "Evaluated digital learning platforms and pre-program coding and mathematics content.",
      "Converted readiness gaps into a structured content roadmap for program leadership.",
      "Worked with faculty, operations and student-facing teams on orientation and program initiatives.",
      "Translated stakeholder requirements into clearer student guidance and experiences."
    ],
    evidence: ["Readiness analysis", "Content roadmap", "Cross-functional delivery", "Student experience"],
    palette: "cardinal",
    visual: "modules"
  },
  {
    id: "grexa",
    visible: true,
    group: "Career",
    organization: "Grexa AI Pvt. Ltd.",
    location: "Mumbai, India",
    dates: "February 2025 – June 2025",
    title: "Product Manager Intern",
    challenge: "Make complex local-search signals useful to small-business owners who do not speak in SEO jargon.",
    contributions: [
      "Turned research across hundreds of Google Business Profiles and 10+ ranking signals into a GBP Health Score.",
      "Owned requirements for Business Profile, POS and Billing, and Blog modules.",
      "Wrote PRDs, acceptance criteria and user flows with engineering, design and marketing.",
      "Instrumented Amplitude events and used adoption patterns to refine onboarding and ranking logic."
    ],
    evidence: ["Hundreds of profiles", "10+ ranking signals", "3 core modules", "20% faster turnaround"],
    palette: "sage",
    image: { src: "/images/grexa-team.webp", alt: "Satvik with the Grexa AI team", width: 731, height: 438 },
    visual: "image"
  },
  {
    id: "wuelev8",
    visible: true,
    group: "Career",
    organization: "WUElev8 Innovation Services Pvt. Ltd.",
    location: "Noida, India",
    dates: "June 2024 – August 2024",
    title: "Product Development and Strategy Analyst",
    challenge: "Move a collaborative project-sharing idea from competitive research to a testable MVP blueprint.",
    contributions: [
      "Mapped competitor offerings and user behavior into product vision, user stories and MVP requirements.",
      "Created a prioritized development blueprint.",
      "Built and tested a FastAPI backend and Figma prototype through agile sprints.",
      "Delivered a functional MVP and reduced development bottlenecks by 30%."
    ],
    evidence: ["Vision to MVP", "FastAPI + Figma", "Agile delivery", "30% fewer bottlenecks"],
    palette: "powder",
    image: { src: "/images/wuelev8-product.webp", alt: "WUElev8 collaborative platform prototype displayed on a laptop", width: 720, height: 438 },
    visual: "blueprint"
  },
  {
    id: "usc-marshall",
    visible: true,
    group: "Education",
    organization: "USC Marshall School of Business",
    location: "Los Angeles, California",
    dates: "Expected May 2027",
    title: "M.S. Business Analytics, STEM",
    challenge: "A new country and a global classroom turned rigorous analytics into a team sport.",
    contributions: [
      "Combining technical analysis with business decisions and clear communication.",
      "Building across team projects, case competitions and applied coursework.",
      "Earned Dean's List recognition.",
      "Scored 97/100 in Algorithmic Thinking with Python."
    ],
    evidence: ["Dean's List", "97/100 Python", "Global classroom", "Case competition"],
    palette: "gold",
    image: { src: "/images/usc-collage.webp", alt: "Collage of Satvik with classmates and at USC Marshall events", width: 1080, height: 1042 },
    visual: "image"
  },
  {
    id: "nmims",
    visible: true,
    group: "Education",
    organization: "SVKM's Narsee Monji Institute of Management Studies",
    location: "Indore, India",
    dates: "Graduated August 2025",
    title: "B.Tech. Computer Engineering",
    challenge: "The chapter where code expanded into product, business, data, leadership and campus life.",
    contributions: [
      "Built a technical foundation in computer engineering.",
      "Expanded through product projects, research, clubs and competitions.",
      "Led and organized across GDSC, ACM, placement, cultural and student initiatives.",
      "Graduated with a 3.91/4.00 GPA."
    ],
    evidence: ["3.91/4.00 GPA", "Dean's List", "Best Student Award", "Technical + leadership"],
    palette: "brick",
    image: { src: "/images/nmims-collage.webp", alt: "Collage of Satvik's student leadership, campus and presentation experiences at NMIMS", width: 1080, height: 1042 },
    visual: "image"
  },
  {
    id: "dps",
    visible: false,
    group: "Education",
    organization: "TODO: exact DPS school and campus",
    location: "TODO",
    dates: "TODO",
    title: "TODO",
    challenge: "TODO",
    contributions: [],
    evidence: [],
    palette: "powder",
    visual: "modules"
  }
];

export const visibleJourney = journeyEntries.filter((entry) => entry.visible);
