import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "incite",
    label: "Incite",
    subtitle: "AI-powered Instagram analytics and engagement platform",
    outcome: "Turning post performance and audience sentiment into a clear next content decision.",
    problem: "Brands and creators see plenty of vanity metrics, but still struggle to understand what drives engagement and what to do next.",
    role: "Product builder across research, product definition, analytics, backend, recommendation logic and usability iteration.",
    decisions: [
      "Built an end-to-end experience with Python, FastAPI, Firebase, FlutterFlow, NLP and WebSockets.",
      "Combined performance data with comment sentiment for real-time recommendations.",
      "Organized timing, audience segmentation and dashboard flows around decisions rather than reporting volume.",
      "Ran usability testing and used the feedback to iterate."
    ],
    evidence: [
      { value: "85%", label: "validation accuracy" },
      { value: "4.6/5", label: "usability satisfaction" }
    ],
    tools: ["Python", "FastAPI", "Firebase", "FlutterFlow", "NLP", "WebSockets"],
    accent: "#b8c7b4",
    image: { src: "/images/incite-ui.webp", alt: "Supplied Incite mobile analytics and recommendation screens", width: 924, height: 596 }
  },
  {
    id: "people-first",
    label: "People-First",
    subtitle: "Optimized social media strategy for a client",
    outcome: "Reframing executive social channels from broadcasts into community conversations.",
    problem: "Traditional one-way presidential communication lacked the formats, timing and narrative style needed for stronger audience participation.",
    role: "Cross-platform engagement analysis, content strategy, brand voice and recommendations with marketing and communications partners.",
    decisions: [
      "Identified high-impact content types, timing patterns and narrative styles.",
      "Created a human-centered digital storytelling framework.",
      "Helped shape an authentic Champion-in-Chief voice while keeping the client confidential."
    ],
    evidence: [{ value: "25%", label: "projected engagement lift" }],
    tools: ["Python", "Engagement analysis", "Content strategy", "Brand voice"],
    accent: "#e5ca76",
    image: { src: "/images/people-first.webp", alt: "Satvik and teammates presenting at the supplied marketing case competition", width: 1320, height: 590 }
  },
  {
    id: "streaming",
    label: "Streaming Analytics",
    subtitle: "Interactive Tableau dashboard",
    outcome: "Making one million streaming records fast enough to explore and clear enough to act on.",
    problem: "Large public streaming datasets made genre, audience and engagement patterns difficult to explore quickly.",
    role: "Data pipeline optimization, SQL and Python analysis, visualization design and Tableau interaction design.",
    decisions: [
      "Built an interactive Tableau dashboard over more than one million records.",
      "Created exploration paths for genre and engagement trends.",
      "Optimized Python and SQL pipelines for a faster analytical loop."
    ],
    evidence: [
      { value: "30%", label: "less processing time" },
      { value: "20%", label: "faster dashboard loads" }
    ],
    tools: ["Tableau", "Python", "SQL"],
    accent: "#b9c9d8",
    image: { src: "/images/streaming-dashboard.webp", alt: "Supplied streaming analytics Tableau dashboard views", width: 920, height: 1746, position: "top" }
  },
  {
    id: "emotion-ai",
    label: "Emotion AI",
    subtitle: "AI-based emotion detection system",
    outcome: "Translating unstructured customer feedback into emotional signals a support team can use.",
    problem: "Reviews and support interactions contain emotional context that ordinary reporting often misses.",
    role: "Model exploration, dashboard concept, analysis and product framing.",
    decisions: [
      "Explored CNN and LSTM approaches for classifying emotion in text.",
      "Designed a live dashboard concept for rapid interpretation.",
      "Framed personalized support responses around detected emotion.",
      "Connected the product concept to related AI and ML research."
    ],
    evidence: [
      { value: "CNN + LSTM", label: "model exploration" },
      { value: "Live", label: "interpretation concept" }
    ],
    tools: ["Python", "Deep learning", "CNN", "LSTM", "Dashboard design"],
    accent: "#c8bdd8",
    image: { src: "/images/emotion-ai.webp", alt: "Supplied emotion detection demo, AI illustration and research paper excerpt", width: 1266, height: 594 }
  }
];
