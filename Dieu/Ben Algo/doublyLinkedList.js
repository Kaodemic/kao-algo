class node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // append item to linkedlist
  append(value) {
    let newNode = new node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  //append item at Index
  appendAtIndex(value, position) {
    if (position > 0 && position > this.size) {
      return;
    }

    let count = 0;
    let current = this.head;
    let newNode = new node(value);
    if (position === 0) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (current) {
        if (count == position) {
          newNode.previous = current.previous;
          //console.log("current.previous.next",current.previous.next); [2].next
          current.previous.next = newNode;
          newNode.next = current;
          current.previous = newNode;
        }
        current = current.next;
        count++;
      }
      this.size++;
    }
  }

  remove(value) {
    let current = this.head;
    while (current) {
      if (current.val === value) {
        // there is only 1 node in doublylinkedlist
        if (current == this.head && current == this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current == this.head) {
          this.head.next = this.head;
          this.head.previous = null;
        } else if (current == this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
      }
      current = current.next;
    }
    this.size--;
  }

  removeAtIndex(pos) {
    if (pos > 0 && pos > this.size) {
      return;
    }
    let current = this.head;
    let count = 0;
    if (pos === 0) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      while (current) {
        if (current == this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else if (count == pos) {
          current.previous.next = current.next;
          current.next.previous = current.previous;
          break;
        }
        current = current.next;
        count++;
      }

      this.size--;
    }
  }

  reserve() {
    let temp = null;
    let current = this.head;
    while (current) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;

      current = current.previous;
    }
    if (temp != null) {
      this.head = temp.previous;
    }
  }

  printDoublyLinkedList() {
    let current = this.head;
    while (current) {
      console.log(current.val + "<->");
      current = current.next;
    }
  }
}

let dll = new doublyLinkedList();
dll.append("A");
dll.append("B");
dll.append("C");
dll.append("D");
dll.appendAtIndex(3, 1);
//dll.remove(2);
// dll.removeAtIndex(3);
// dll.reserve();
dll.printDoublyLinkedList();
