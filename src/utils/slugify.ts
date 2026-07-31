export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
}
