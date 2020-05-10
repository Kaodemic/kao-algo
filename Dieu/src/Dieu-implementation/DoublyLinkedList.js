class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  insertAtIndex(n, index) {
    if (index > 0 && index > this.size) {
      return "out of range man!";
    }

    let current = this.head;
    let count = 0;
    let node = new Node(n);
    if (index === 0) {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
      this.size++;
    } else {
      while (current) {
        if (count === index) {
          node.previous = current.previous;
          current.previous.next = node;
          node.next = current;
          current.previous = node;
        }
        current = current.next;
        count++;
      }
      this.size++;
    }
  }

  reserve() {
    // the idea how to make the head of the list point to null. That's why we created temp == null;
    let temp = null;
    let current = this.head;
    while (current) {
      temp = current.previous;
      current.previous = current.next; // move the arrow pointing to current.next a -> 'B' => which means current = B
      current.next = temp;

      current = current.previous;
    }
    if (temp != null) {
      this.head = temp.previous;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val, "<-->");
      current = current.next;
    }
  }
}

let dll = new DoublyLinkedList();
dll.append("A");
dll.append("B");
dll.append("C");
dll.append("D");
dll.insertAtIndex("E", 3);
dll.reserve();
dll.print();
