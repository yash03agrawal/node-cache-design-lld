export default class ListNode<K> {
  element: K;
  next: ListNode<K> | null;
  prev: ListNode<K> | null;

  constructor(ele: K) {
    this.element = ele;
    this.next = null;
    this.prev = null;
  }
}
