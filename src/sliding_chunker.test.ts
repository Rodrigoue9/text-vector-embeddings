import { describe, it, expect } from 'vitest';
import { chunkTextWithSlidingWindow } from './sliding_chunker';

describe('Sliding Window Chunker', () => {
  it('splits text with overlap', () => {
    const text = 'word '.repeat(300).trim();
    const chunks = chunkTextWithSlidingWindow(text, 100, 20);
    expect(chunks.length).toBeGreaterThan(1);
  });
});
