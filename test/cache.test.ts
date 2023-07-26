import Cache from '../src/cache';
import CacheFactory from '../src/cachefactory/cacheFactory';

describe('CacheTest', () => {
  test('testing if cache is running fine', () => {
    const cache: Cache<number, number> = new CacheFactory<number, number>().defaultCache(3);

    cache.put(1, 1);
    cache.put(2, 2);

    expect(cache.get(1)).toEqual(1);

    cache.put(3, 3);
    expect(cache.get(3)).toEqual(3);

    cache.put(4, 4);
    expect(cache.get(2)).toEqual(null);
  });
});
