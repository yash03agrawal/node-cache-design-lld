import IStorage from './storage';

export default class HashMapStorage<TKey, TValue> implements IStorage<TKey, TValue> {
  map: Map<TKey, TValue>;
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<TKey, TValue>();
  }

  add = (key: TKey, value: TValue) => {
    if (this.map.size >= this.capacity) {
      throw new Error('storage full');
    }
    this.map.set(key, value);
  };

  get = (key: TKey): TValue | undefined => {
    if (this.map.has(key)) {
      return this.map.get(key);
    } else {
      throw new Error('key not found');
    }
  };

  remove = (key: TKey) => {
    this.map.delete(key);
  };
}
