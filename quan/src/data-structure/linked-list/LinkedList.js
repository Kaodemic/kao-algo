import Comparator from "../../utils/comparator/comparator";
import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  /**
   *
   * @param {Function} ComparatorFn
   */
  constructor(ComparatorFn) {
    /**
     * @var LinkedListNode
     */
    this.head = null;
    /**
     * @var LinkedListNode
     */
    this.tail = null;
    this.compare = new Comparator(ComparatorFn);
  }

  /**
   *
   * @param {*} val
   * @return {LinkedList}
   */

  append(val) {
    const newNode = new LinkedListNode(val);
    // if there is no head yet let's make new node a head
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // attach the newNode to the end of linked list
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(val) {
    // make a new node to be a head.
    const newNode = new LinkedListNode(val, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  delete(val) {
    if (!this.head) return null;
    let deletedNode = null;

    // if the head must be deleted then make next node that is different from the head to be a ne node
    while (this.head && this.head.value == val) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;

    if (currentNode != null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, val)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }

      // Check if the tail must be deleted
      if (this.compare.equal(this.tail.value, val)) {
        this.tail = currentNode;
      }
      return deletedNode;
    }
  }

    /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */

  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }


  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

    /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  // reverse() { 
  //   let currentNode = this.head;
  //   while (currentNode.next) {
  //     [currentNode, currentNode.next] = [currentNode.next, currentNode];
  //   }
  //   this.tail = this.head;
  //   this.head = currentNode;
  // }
  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
