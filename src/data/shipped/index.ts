import { theReef } from "./the-reef";
import type { ShippedWork } from "./types";

/** Every shipped work, newest first. Adding an entry here publishes its hub page. */
export const shippedWorks: readonly ShippedWork[] = [theReef];

export function getShippedWork(slug: string): ShippedWork | undefined {
  return shippedWorks.find((work) => work.slug === slug);
}

export function getShippedSlugs(): string[] {
  return shippedWorks.map((work) => work.slug);
}

export * from "./types";
