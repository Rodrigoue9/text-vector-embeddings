/**
 * UbiquityOS - embedding-cache-evictor
 */
export function isEmbeddingStale(cachedAt: number, ttlMs: number = 86400000): boolean { return (Date.now() - cachedAt) > ttlMs; }
