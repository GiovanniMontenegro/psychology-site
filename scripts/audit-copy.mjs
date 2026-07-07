import { readFileSync } from "node:fs";

const files = ["app/page.tsx", "data/site-content.ts", "components/site-header.tsx"];

const source = files.map((file) => readFileSync(file, "utf8")).join("\n");

const bannedPatterns = [
  {
    pattern: /Il sito evita|questa sezione|ridurre attrito|Sito vetrina/i,
    reason: "meta-copy da brief interno invece di comunicazione rivolta al visitatore",
  },
  {
    pattern: /Le persone arrivano/i,
    reason: "terza persona generica dove serve una voce diretta o professionale",
  },
  {
    pattern: /\b(cio|puo|piu|qualita|modalita|quotidianita|puntualita|citta|Si\.)\b/i,
    reason: "testi italiani visibili con accenti mancanti",
  },
  {
    pattern: /Nome Cognome|Via da definire|Città(?![a-zà-ù])/,
    reason: "placeholder anagrafici o di sede ancora presenti nei contenuti pubblici",
  },
];

const failures = bannedPatterns
  .filter(({ pattern }) => pattern.test(source))
  .map(({ pattern, reason }) => `- ${pattern}: ${reason}`);

if (failures.length > 0) {
  console.error("Copy audit failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Copy audit passed");
