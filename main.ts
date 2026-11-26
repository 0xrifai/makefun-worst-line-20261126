import { mkdirSync, writeFileSync } from "node:fs";

// The worst line an AI could say: a machine that has already finished
// the relationship before the first date has even started.
const LINE =
  "I have already drafted our breakup message. It is very polite. Shall we begin?";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

function isUsableText(text: string): boolean {
  if (text.length < 1 || text.length > MAX_CHARS) return false;
  if (text.trim().length === 0) return false;
  return true;
}

function checkUtf8RoundTrip(text: string): boolean {
  const encoded = new TextEncoder().encode(text);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  return decoded === text;
}

function describeLine(text: string): string {
  // A one-line summary for the console, so a human running this locally
  // can see what was written without opening the output file.
  const words = text.split(/\s+/).filter(Boolean).length;
  return `Wrote ${text.length} characters (${words} words) to ${OUTPUT_PATH}.`;
}

function main(): void {
  if (!isUsableText(LINE)) {
    throw new Error("Line must be 1-140 non-whitespace characters.");
  }
  if (!checkUtf8RoundTrip(LINE)) {
    throw new Error("Line must be valid UTF-8 text.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(describeLine(LINE));
}

main();
