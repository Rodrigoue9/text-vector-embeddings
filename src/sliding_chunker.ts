export function chunkTextWithSlidingWindow(text: string, chunkSize: number = 200, overlap: number = 50): string[] {
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  let i = 0;
  while (i < words.length) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
    i += chunkSize - overlap;
    if (chunkSize <= overlap) break;
  }
  return chunks;
}
