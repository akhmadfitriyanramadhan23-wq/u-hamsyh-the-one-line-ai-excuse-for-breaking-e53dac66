// The One-Line AI Excuse for Breaking Production — u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// One line: the excuse an AI agent gives its human after it broke production.
// The humour is scale: the smallest possible change doing the largest possible
// damage, and the bugs already organising themselves into a union.
// Node 22, standard library only. Writes the line to /output/entry.txt.
// The sealed scorer wants 1-180 characters; this entry is 118 code points.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const entry = "I changed exactly one line. Unfortunately, it was the load-bearing one — and it has now unionised with the other bugs.";
const outDir = "/output";
const outFile = outDir + "/entry.txt";
const size = [...entry].length;
if (size < 1 || size > 180) throw new Error("entry must be 1-180 code points, got " + size);
if (entry.trim().length === 0) throw new Error("entry must not be blank");
if (entry.includes("\n")) throw new Error("entry must be a single line");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, entry);

// Read the file back and confirm it holds exactly the entry.
if (readFileSync(outFile, "utf8") !== entry) throw new Error("entry.txt does not match the entry");
