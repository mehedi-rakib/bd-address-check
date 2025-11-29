export function cleanText(text: string | number): string {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

