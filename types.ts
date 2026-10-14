export type Palette = "coral" | "cardinal" | "sage" | "powder" | "gold" | "brick";

export type JourneyEntry = {
  id: string;
  visible: boolean;
  group: "Career" | "Education";
  organization: string;
  location: string;
  dates: string;
  title: string;
  status?: string;
  challenge: string;
  contributions: string[];
  evidence: string[];
  note?: string;
  palette: Palette;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  visual: "pipeline" | "modules" | "image" | "blueprint";
};

export type Project = {
  id: string;
  label: string;
  subtitle: string;
  outcome: string;
  problem: string;
  role: string;
  decisions: string[];
  evidence: { value: string; label: string }[];
  tools: string[];
  accent: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position?: string;
  };
};
