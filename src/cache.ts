import IEvictionPolicy from './policy/evictionPolicy';
import IStorage from './storage/storage';

export default class Cache<TKey, TValue> {
  private cacheEvictionPolicy: IEvictionPolicy<TKey>;
  private storage: IStorage<TKey, TValue>;

  constructor(cacheEvictionPolicy: IEvictionPolicy<TKey>, storage: IStorage<TKey, TValue>) {
    this.cacheEvictionPolicy = cacheEvictionPolicy;
    this.storage = storage;
  }

  put = (key: TKey, value: TValue): void => {
    try {
      this.storage.add(key, value);
      this.cacheEvictionPolicy.accessKey(key);
    } catch (error) {
      console.log('trying to evict keys from storage');
      const keyToRemove: TKey | null = this.cacheEvictionPolicy.evictKey();
      if (!keyToRemove) {
        throw Error('no storage left');
      }
      this.storage.remove(keyToRemove);
      console.log(`removed key: ${keyToRemove}`);
      this.put(key, value);
    }
  };

  get = (key: TKey): TValue | null => {
    try {
      const val: TValue | undefined = this.storage.get(key);
      if (!val) {
        return null;
      }
      this.cacheEvictionPolicy.accessKey(key);
      return val;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
