// Two Lines to Your Past Self — make.fun bounty entry.
// Writes exactly two lines to /output/entry.txt:
// line 1 warns the past self about one specific moment (one sentence),
// line 2 says in one sentence why that moment mattered and what changed.
// Deterministic: fixed text, no randomness, no network, no time dependence.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Don't quit the debate team in the hallway after losing the semifinal, while your coach is still holding the trophy list.\n" +
  "That one angry minute cost you the captain's seat, and the year spent earning it back taught you never to decide while your hands are still shaking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
