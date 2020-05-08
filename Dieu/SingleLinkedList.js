class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
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
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  insert(n, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      let node = new Node(n);
      let current = this.head;
      this.head = node;
      node.next = current;
      return;
    }
    let node = new Node(n);
    let previous, current;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  reserve() {
    let current = this.head;
    let next = null;
    let previous = null;
    while (current) {
      // save next;
      next = current.next;

      // reverse
      current.next = previous;

      //advance pre && curr
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val + " -> ");
      current = current.next;
    }
  }
}

let sll = new SingleLinkedList();
sll.append("A");
sll.append("B");
sll.append("C");
sll.append("D");
// sll.insert("D", 0);
sll.reserve();
sll.print();
