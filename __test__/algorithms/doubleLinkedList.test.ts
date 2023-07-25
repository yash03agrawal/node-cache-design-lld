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
  const ddl = new DoubleLinkedList<number>();

  describe('.insertNodeAtLast', () => {
    test('describe function', () => {
      expect(typeof ddl.removeNode).toBe('function');
    });

    test('insert happening correctly', () => {
      const node1 = new ListNode<number>(1);
      const node2 = new ListNode<number>(2);
      const node3 = new ListNode<number>(3);
      const node4 = new ListNode<number>(4);

      ddl.insertNodeAtLast(node1);
      verifyDDL(ddl, [1]);

      ddl.insertNodeAtLast(node2);
      verifyDDL(ddl, [1, 2]);

      ddl.insertNodeAtLast(node3);
      verifyDDL(ddl, [1, 2, 3]);

      ddl.insertNodeAtLast(node4);
      verifyDDL(ddl, [1, 2, 3, 4]);
    });
  });
});
