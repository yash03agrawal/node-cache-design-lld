import ListNode from './listNode';

export default class DoubleLinkedList<K> {
  head: ListNode<K | null>;
  tail: ListNode<K | null>;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  removeNode = (node: ListNode<K | null> | undefined) => {
    if (node && node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  };

  insertNodeAtLast = (node: ListNode<K | null> | undefined) => {
    if (!node) {
      throw new Error('invalid data');
    }
    if (this.tail.prev) this.tail.prev.next = node;
    node.prev = this.tail.prev;
    this.tail.prev = node;
    node.next = this.tail;
  };

  insertElementAtLast = (ele: K): ListNode<K | null> => {
    if (ele === null) {
      throw Error('invalid data');
    }

    const node = new ListNode<K | null>(ele);
    this.insertNodeAtLast(node);
    return node;
  };

  private isItemPresent = (): boolean => {
    if (this.head.next !== this.tail) {
      return true;
    }
    return false;
  };

  getFirstNode = (): ListNode<K | null> | null => {
    if (!this.isItemPresent()) {
      return null;
    }
    return this.head.next;
  };

  getLastElement = (): ListNode<K | null> | null => {
    if (!this.isItemPresent()) {
      return null;
    }
    return this.tail.prev;
  };
}
