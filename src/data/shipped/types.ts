/**
 * Content model for shipped work — the canonical hub entry that every other
 * surface (YouTube, Medium, Contra, social) links back to.
 *
 * A `ShippedWork` is authored data. `PromptBlock`s are parsed at build time from
 * the project's own production document so the prompts are never duplicated.
 */

export type ShippedKind = "film" | "app" | "repo";

export type LinkKind =
  | "video"
  | "short"
  | "post"
  | "profile"
  | "social"
  | "repo"
  | "site";

export interface ShippedLink {
  label: string;
  url: string;
  kind: LinkKind;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ScriptBeat {
  n: number;
  time: string;
  beat: string;
  dialogue: string;
}

export interface CastMember {
  name: string;
  silhouette: string;
  scale: string;
  character: string;
}

export interface Prose {
  heading: string;
  paragraphs: string[];
}

/** A fenced code block lifted from the production document, with its heading. */
export interface PromptBlock {
  name: string;
  body: string;
}

export interface ShippedWork {
  slug: string;
  kind: ShippedKind;
  title: string;
  tagline: string;
  logline: string;
  publishedAt: string;
  /** YouTube id of the master cut, embedded in the hero. */
  videoId: string;
  facts: Fact[];
  intro: Prose[];
  cast: CastMember[];
  script: ScriptBeat[];
  craft: Prose[];
  /** Filename under `src/data/shipped/` holding the production document. */
  productionDoc: string;
  /**
   * Every other surface this work lives on. Backfilled after the fan-out
   * completes, so a surface that failed to publish is simply absent.
   */
  links: ShippedLink[];
}
