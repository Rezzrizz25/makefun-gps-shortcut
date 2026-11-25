// The GPS Swears It Was a Shortcut — make.fun entry
// Writes the GPS's one-line excuse to /output/entry.txt (1-200 chars, plain text).

import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "That wasn't a wrong turn, it was a shortcut through a wedding. The bride waved, the band played, and I am still waiting for the map to apologize.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
console.log(`(${excuse.length} characters)`);
