import { readFile } from "node:fs/promises";
import path from "node:path";

import type { PromptBlock } from "./types";

const DOC_DIR = path.join(process.cwd(), "src", "data", "shipped");
const FENCE = "```";

interface ParsedDoc {
  elements: PromptBlock[];
  shots: PromptBlock[];
}

/**
 * Pull fenced blocks out of a production document, labelled by the heading that
 * introduces them.
 *
 * Element prompts sit under `### \`name\`` headings; shot prompts sit under
 * `## SHOT n — ...` headings. Only the first fenced block after a heading is
 * taken, so prose examples further down a section are ignored.
 */
function parse(markdown: string): ParsedDoc {
  const elements: PromptBlock[] = [];
  const shots: PromptBlock[] = [];

  let heading: string | null = null;
  let isShot = false;
  let claimed = false;
  let fenced: string[] | null = null;

  for (const line of markdown.split(/\r?\n/)) {
    if (fenced) {
      if (line.trimEnd() === FENCE) {
        const block = { name: heading ?? "Untitled", body: fenced.join("\n") };
        (isShot ? shots : elements).push(block);
        fenced = null;
        claimed = true;
        continue;
      }
      fenced.push(line);
      continue;
    }

    const shotHeading = line.match(/^##\s+(SHOT\s+.+?)\s*$/);
    if (shotHeading) {
      heading = shotHeading[1].replace(/\*\*/g, "").trim();
      isShot = true;
      claimed = false;
      continue;
    }

    const elementHeading = line.match(/^###\s+`([^`]+)`\s*$/);
    if (elementHeading) {
      heading = elementHeading[1];
      isShot = false;
      claimed = false;
      continue;
    }

    if (line.trimStart().startsWith(FENCE) && heading && !claimed) {
      fenced = [];
    }
  }

  return { elements, shots };
}

/** Read and parse a production document that lives beside this module. */
export async function loadProductionDoc(filename: string): Promise<ParsedDoc> {
  const markdown = await readFile(path.join(DOC_DIR, filename), "utf8");
  return parse(markdown);
}
