export class EmbeddingLruCache {
	private cache = new Map<string, number[]>();
	constructor(private max = 1000) {}
	get(k: string) {
		return this.cache.get(k);
	}
	set(k: string, v: number[]) {
		if (this.cache.size >= this.max)
			this.cache.delete(this.cache.keys().next().value);
		this.cache.set(k, v);
	}
}
