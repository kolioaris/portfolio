import fs from "fs";
import path from "path";

const cssDir = path.join(process.cwd(), ".next", "static", "css");
const outFile = path.join(process.cwd(), "src", "app", "generated-css.mjs");

try {
  if (!fs.existsSync(cssDir)) {
    console.warn(
      "[generate-css-href] .next/static/css not found — run this after `next build`"
    );
    process.exit(0);
  }

  const files = fs.readdirSync(cssDir).filter((f) => f.endsWith(".css"));
  if (files.length === 0) {
    console.warn("[generate-css-href] no .css files found in .next/static/css");
    process.exit(0);
  }

  const cssFile = files[0];
  const cssHref = "/_next/static/css/" + cssFile;

  const content = `// generated at build time — DO NOT EDIT
export default ${JSON.stringify(cssHref)};
`;

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, content, "utf8");
  console.log("[generate-css-href] wrote", outFile, cssHref);
} catch (err) {
  console.error("[generate-css-href] error:", err);
  process.exit(1);
}
