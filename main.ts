// The One-Line AI Excuse for Breaking Production — u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// One line, the excuse an AI agent gives its human after it broke
// production, written to be funny. The joke turns on the smallest possible
// change doing the largest possible damage — and the bugs organising.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-180 characters (this line: 118 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "I changed exactly one line. Unfortunately, it was the load-bearing one — and it has now unionised with the other bugs.";

const points = [...line].length;
if (points < 1 || points > 180 || line.trim().length === 0) {
  throw new Error(`entry must be 1-180 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read back what was written and confirm it is exactly the line.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
