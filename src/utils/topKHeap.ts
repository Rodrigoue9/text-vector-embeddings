/**
 * UbiquityOS - top-k-heap-resolver
 */
export function getTopK<T>(items: T[], k: number) { return items.slice(0, k); }
