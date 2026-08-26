/**
 * UbiquityOS - vector-norm-normalizer
 */
export function normalizeL2(vec: number[]): number[] { const m = Math.sqrt(vec.reduce((a,b)=>a+b*b,0)) || 1; return vec.map(x=>x/m); }
