export default interface IStorage<TKey, TValue> {
  add: (key: TKey, value: TValue) => void;
  get: (key: TKey) => TValue | undefined;
  remove: (key: TKey) => void;
}
