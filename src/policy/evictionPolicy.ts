export default interface IEvictionPolicy<TKey> {
  accessKey: (key: TKey) => void;
  evictKey: () => TKey | null;
}
