export function findEditDistance(sentenceA: string, sentenceB: string): number {
  const lengthA = sentenceA.length;
  const lengthB = sentenceB.length;
  const distanceMatrix: number[][] = Array.from({ length: lengthA + 1 }, () => Array.from({ length: lengthB + 1 }, () => 0));

  for (let indexA = 0; indexA <= lengthA; indexA += 1) {
    for (let indexB = 0; indexB <= lengthB; indexB += 1) {
      if (indexA === 0) {
        distanceMatrix[indexA][indexB] = indexB;
      } else if (indexB === 0) {
        distanceMatrix[indexA][indexB] = indexA;
      } else if (sentenceA[indexA - 1] === sentenceB[indexB - 1]) {
        distanceMatrix[indexA][indexB] = distanceMatrix[indexA - 1][indexB - 1];
      } else {
        distanceMatrix[indexA][indexB] =
          1 + Math.min(distanceMatrix[indexA - 1][indexB], distanceMatrix[indexA][indexB - 1], distanceMatrix[indexA - 1][indexB - 1]);
      }
    }
  }

  return distanceMatrix[lengthA][lengthB];
}

export function normalizedSimilarity(sentenceA: string, sentenceB: string): number {
  // Treat empty inputs as no similarity to avoid matching blank lines.
  if (!sentenceA || !sentenceB) {
    return 0;
  }
  const maxLength = Math.max(sentenceA.length, sentenceB.length);
  if (maxLength === 0) {
    return 0;
  }
  return 1 - findEditDistance(sentenceA, sentenceB) / maxLength;
}

/**
 * Computes batch cosine similarity matrix for embedding vectors (Resolves #108).
 */
export function computeCosineSimilarityMatrix(vectors: number[][]): number[][] {
  const n = vectors.length;
  const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    matrix[i][i] = 1.0;
    for (let j = i + 1; j < n; j++) {
      let dot = 0, normA = 0, normB = 0;
      for (let k = 0; k < vectors[i].length; k++) {
        dot += vectors[i][k] * vectors[j][k];
        normA += vectors[i][k] * vectors[i][k];
        normB += vectors[j][k] * vectors[j][k];
      }
      const sim = normA === 0 || normB === 0 ? 0 : dot / (Math.sqrt(normA) * Math.sqrt(normB));
      matrix[i][j] = sim;
      matrix[j][i] = sim;
    }
  }

  return matrix;
}
