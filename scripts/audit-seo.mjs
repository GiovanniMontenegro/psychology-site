import { existsSync, readFileSync } from "node:fs";

const checks = [];

function check(label, condition) {
  checks.push({ label, condition: Boolean(condition) });
}

function read(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

const content = read("data/site-content.ts");
const layout = read("app/layout.tsx");
const page = read("app/page.tsx");
const structuredData = read("components/structured-data.tsx");
const robots = read("app/robots.ts");
const sitemap = read("app/sitemap.ts");

check("SEO title targets psicologa/psicoterapeuta and Rutigliano", /Psicologa.*Psicoterapeuta.*Rutigliano/s.test(content) && /siteContent\.seo\.title/.test(layout));
check("Metadata includes local search keywords", /psicologa a Rutigliano/.test(content) && /EMDR a Rutigliano/.test(content) && /siteContent\.seo\.keywords/.test(layout));
check("Robots metadata keeps snippets available for AI search", /index:\s*true/.test(layout) && /googleBot/.test(layout) && /"max-snippet":\s*-1/.test(layout));
check("Structured data component exists", existsSync("components/structured-data.tsx"));
check("Structured data exposes LocalBusiness and FAQPage JSON-LD", /@type.*LocalBusiness/s.test(structuredData) && /@type.*FAQPage/s.test(structuredData));
check("Structured data includes areaServed and service catalog", /areaServed/.test(structuredData) && /hasOfferCatalog/.test(structuredData));
check("Root layout renders structured data", /<StructuredData/.test(layout));
check("Robots route allows indexing and points to sitemap", /sitemap/.test(robots) && /allow:\s*["']\/["']/.test(robots));
check("Sitemap route includes homepage", /MetadataRoute\.Sitemap/.test(sitemap) && /url:/.test(sitemap));
check("Local section mentions Rutigliano and nearby service area", /Rutigliano/.test(content) && /provincia di Bari/.test(content));
check("FAQ content includes first colloquio and online queries", /primo colloquio/i.test(content) && /online/i.test(content));
check("Page renders local SEO detail list", /localSeo/.test(page) && /location-list/.test(page));

const failed = checks.filter((item) => !item.condition);

for (const item of checks) {
  console.log(`${item.condition ? "PASS" : "FAIL"} ${item.label}`);
}

if (failed.length > 0) {
  console.error(`\nSEO audit failed: ${failed.length} check(s) failed.`);
  process.exit(1);
}

console.log("\nSEO audit passed.");
