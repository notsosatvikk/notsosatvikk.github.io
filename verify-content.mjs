import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "public/SatvikGupta_Resume.pdf",
  "public/images/portrait-cutout.webp",
  "public/images/portrait-formal.webp",
  "public/images/grexa-team.webp",
  "public/images/wuelev8-product.webp",
  "public/images/usc-collage.webp",
  "public/images/nmims-collage.webp",
  "public/images/incite-ui.webp",
  "public/images/people-first.webp",
  "public/images/streaming-dashboard.webp",
  "public/images/emotion-ai.webp",
  "public/og-image.webp"
];

for (const file of requiredFiles) await access(file);

const sources = await Promise.all([
  readFile("content/journey.ts", "utf8"),
  readFile("content/projects.ts", "utf8"),
  readFile("content/profile.ts", "utf8"),
  readFile("app/page.tsx", "utf8"),
  readFile("components/contact/ContactFooter.tsx", "utf8")
]);
const source = sources.join("\n");

if (/USC\s+(student\s+)?ID/i.test(source)) throw new Error("A private USC identifier label leaked into production source.");
if (!/id: "dps"[\s\S]*?visible: false/.test(sources[0])) throw new Error("DPS placeholder must remain disabled.");
if (!/projected engagement lift/.test(sources[1])) throw new Error("People-First projection qualifier is missing.");
if (/30% customer-satisfaction|30% customer satisfaction/.test(source)) throw new Error("Unverified Emotion AI outcome must remain hidden.");
if (!/href=\{contact\.resume\} download/.test(sources[4])) throw new Error("Resume download is not wired to local content.");
if ((sources[3].match(/<h1/g) ?? []).length !== 0) throw new Error("The page shell should not introduce another H1.");

const manifesto = await readFile("components/intro/ManifestoIntro.tsx", "utf8");
if ((manifesto.match(/<h1/g) ?? []).length !== 1) throw new Error("The manifesto must contain exactly one H1.");

const resume = await readFile("public/SatvikGupta_Resume.pdf");
if (resume.subarray(0, 4).toString() !== "%PDF") throw new Error("Resume asset is not a valid PDF.");

console.log(`Content QA passed: ${requiredFiles.length} assets, one H1, private ID excluded, uncertain metrics qualified or hidden.`);
