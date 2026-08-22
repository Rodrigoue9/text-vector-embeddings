import { describe, it, expect } from 'vitest';
import { computeCosineSimilarity } from './fallback_cosine';

describe('Cosine Similarity', () => {
  it('computes exact similarity', () => {
    expect(computeCosineSimilarity([1, 0], [1, 0])).toBe(1);
    expect(computeCosineSimilarity([1, 0], [0, 1])).toBe(0);
  });
});
