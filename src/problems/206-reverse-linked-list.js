/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class Node {
    constructor(value, next) {
        this.next = next || null
        this.value = value
    }
}

class LinkedList {
    constructor() {
        this.head= new Node('root')
    }
    insert(data) {
        this.head = new Node(data, this.head);
      }
    print(){
       return this.head;
    }
   
}


const list = new LinkedList();
list.insert(1)
list.insert(2)
list.insert(3)
list.print()
