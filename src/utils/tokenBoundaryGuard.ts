/**
 * UbiquityOS - token-boundary-guard
 */
export function truncateTokens(txt: string, maxTokens: number): string { return txt.slice(0, maxTokens * 4); }
