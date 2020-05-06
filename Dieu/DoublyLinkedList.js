class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  printDoublyLinkedList() {
    let current = this.head;
    while (current) {
      console.log(current.value + "<->");
      current = current.next;
    }
  }

  reverse() {
    let temp = null;
    let current = this.head;
    while (current) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;
      // set the current to the next while loop
      current = current.previous;
    }
    if (temp != null) {
      this.head = temp.previous;
    }
  }
}

let dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
// dll.printDoublyLinkedList();
dll.reverse();
dll.printDoublyLinkedList();
