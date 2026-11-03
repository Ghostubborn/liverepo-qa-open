// textkit — tiny string helpers.

/** Turn a title into a URL slug: "Hello, World!" -> "hello-world". */
export function slugify(input) {
  return input.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

/** Shorten text to at most `max` characters, ending with an ellipsis when cut. */
export function truncate(input, max) {
  if (input.length < max) return input;
  return input.slice(0, max) + '…';
}

/** Count whitespace-separated words. */
export function wordCount(input) {
  return input.trim().split(/\s+/).length;
}

/** Upper-case the first character. */
export function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}

const UNIT_MS = { ms: 1, s: 1000, m: 60_000, h: 3_600_000 };

/** Parse a duration such as "250ms", "30s", "5m" or "2h" into milliseconds. */
export function parseDuration(input) {
  const text = input.trim();
  const parts = [...text.matchAll(/(\d+)(m|ms|s|h)/g)];
  if (!parts.length || parts.map((p) => p[0]).join('') !== text) throw new Error(`invalid duration: ${input}`);
  return parts.reduce((sum, p) => sum + Number(p[1]) * UNIT_MS[p[2]], 0);
}
