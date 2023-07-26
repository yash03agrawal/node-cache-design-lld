import DoubleLinkedList from '../../src/algorithms/doubleLinkedList';
import ListNode from '../../src/algorithms/listNode';

const verifyDDL = (dll: DoubleLinkedList<number>, arr: Array<number>) => {
  let currNode = dll.getFirstNode();
  for (let num of arr) {
    const dllNum = currNode.element;
    expect(num).toEqual(dllNum);
    currNode = currNode.next;
  }
};

describe('DoubleLinkedList', () => {
  describe('.insertNodeAtLast', () => {
    const dll = new DoubleLinkedList<number>();
    test('describe function', () => {
      expect(typeof dll.insertNodeAtLast).toBe('function');
    });

    test('insert happening correctly', () => {
      const node1 = new ListNode<number>(1);
      const node2 = new ListNode<number>(2);
      const node3 = new ListNode<number>(3);
      const node4 = new ListNode<number>(4);

      dll.insertNodeAtLast(node1);
      verifyDDL(dll, [1]);

      dll.insertNodeAtLast(node2);
      verifyDDL(dll, [1, 2]);

      dll.insertNodeAtLast(node3);
      verifyDDL(dll, [1, 2, 3]);

      dll.insertNodeAtLast(node4);
      verifyDDL(dll, [1, 2, 3, 4]);
    });
  });

  describe('.removeNode', () => {
    const dll = new DoubleLinkedList<number>();
    test('describe function', () => {
      expect(typeof dll.removeNode).toBe('function');
    });

    test('removal of node happening correctly', () => {
      const node1: ListNode<number> = dll.insertElementAtLast(1);
      const node2: ListNode<number> = dll.insertElementAtLast(2);
      const node3: ListNode<number> = dll.insertElementAtLast(3);
      const node4: ListNode<number> = dll.insertElementAtLast(4);

      dll.removeNode(node1);
      verifyDDL(dll, [2, 3, 4]);

      dll.removeNode(node3);
      verifyDDL(dll, [2, 4]);

      dll.removeNode(null);
      verifyDDL(dll, [2, 4]);

      dll.removeNode(node4);
      verifyDDL(dll, [2]);
    });
  });
});
