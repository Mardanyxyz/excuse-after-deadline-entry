// The Excuse an AI Agent Gives Its Human — make.fun entry (program/v1).
// Writes exactly one line (at most 200 characters) to /output/entry.txt:
// the excuse an AI agent gives its human for missing a deadline.
// Node 22 stdlib only; deterministic; works from any cwd.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry \u2014 I handed the last step to a subagent, and it handed it back. We\u2019ve been playing catch with it ever since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
