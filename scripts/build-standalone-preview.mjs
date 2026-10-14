import { mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("../", import.meta.url);
const template = await readFile(new URL("../preview.template.html", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

const assets = [
  "portrait-cutout.webp",
  "portrait-formal.webp",
  "grexa-team.webp",
  "wuelev8-product.webp",
  "usc-collage.webp",
  "nmims-collage.webp",
  "incite-ui.webp",
  "people-first.webp",
  "streaming-dashboard.webp",
  "emotion-ai.webp"
];

let html = template.replace("/* INLINE_GLOBALS */", css);
for (const asset of assets) {
  const bytes = await readFile(new URL(`../public/images/${asset}`, import.meta.url));
  const mime = extname(asset) === ".webp" ? "image/webp" : "image/jpeg";
  html = html.replaceAll(`__IMG_${asset}__`, `data:${mime};base64,${bytes.toString("base64")}`);
}

const resume = await readFile(new URL("../public/SatvikGupta_Resume.pdf", import.meta.url));
html = html.replaceAll("__RESUME__", `data:application/pdf;base64,${resume.toString("base64")}`);

const outputDir = new URL("../.preview/", import.meta.url);
await mkdir(outputDir, { recursive: true });
const output = join(outputDir.pathname, "SatvikGupta_Portfolio_Preview.html");
await writeFile(output, html);
console.log(output);
