import Cache from '../cache';
import LRUEvictionPolicy from '../policy/lruEvictionPolicy';
import HashMapStorage from '../storage/hashMapStorage';

export default class CacheFactory<TKey, TValue> {
  defaultCache = (capacity: number) => {
    return new Cache<TKey, TValue>(
      new LRUEvictionPolicy<TKey>(),
      new HashMapStorage<TKey, TValue>(capacity)
    );
  };
}
