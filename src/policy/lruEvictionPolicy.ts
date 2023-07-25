import DoubleLinkedList from '../algorithms/doubleLinkedList';
import ListNode from '../algorithms/listNode';
import IEvictionPolicy from './evictionPolicy';

export default class LRUEvictionPolicy<TKey> implements IEvictionPolicy<TKey> {
  private dll: DoubleLinkedList<TKey>;
  private mapper: Map<TKey, ListNode<TKey | null>>;

  constructor() {
    this.dll = new DoubleLinkedList<TKey>();
    this.mapper = new Map<TKey, ListNode<TKey>>();
  }

  accessKey = (key: TKey) => {
    if (this.mapper.has(key)) {
      this.dll.removeNode(this.mapper.get(key));
      this.dll.insertNodeAtLast(this.mapper.get(key));
    } else {
      const node: ListNode<TKey | null> = this.dll.insertElementAtLast(key);
      this.mapper.set(key, node);
    }
  };

  evictKey = (): TKey | null => {
    const node: ListNode<TKey | null> | null = this.dll.getFirstNode();
    if (!node) {
      return null;
    }
    this.dll.removeNode(node);
    return node.element;
  };
}
