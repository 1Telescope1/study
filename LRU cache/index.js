class LruCache {
  constructor(limit) {
    this.limit = limit;
    this.keys = [];
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return;
    const index = this.keys.findIndex((item) => item == key);
    this.keys.splice(index, 1);
    this.keys.unshift(key);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const index = this.keys.findIndex((item) => (item = key));
      this.keys.splice(index, 1);
      this.cache.delete(key);
    }
    if (this.limit == this.keys.length) {
      const key = this.keys.pop();
      this.cache.delete(key);
    }
    this.keys.unshift(key);
    this.cache.set(key, value);
  }

  list() {
    this.keys.forEach((key) => {
      console.log(this.cache.get(key));
    });
  }
}

const lruCache = new LruCache(3);

lruCache.put('a', { a: 123 });
lruCache.put('b', { b: 123 });
lruCache.put('c', { c: 123 });
lruCache.list();
console.log('-------');
lruCache.get('a');
lruCache.put('d', { d: 123 });
lruCache.list();
