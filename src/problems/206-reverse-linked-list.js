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
        this.head = null;
        this.array = []
        this.value = [];
    }
    insert(data) {
        if (!this.head) {
            const node = new Node(data, null);
            this.head = node;
        } else {
            let node = this.head;
            this.insertNode(node, new Node(data, null))
        }
    }
    insertNode(node, newNode) {
        if (node.next) {
            this.insertNode(node.next, newNode)
        } else {
            node.next = newNode;
        }
    }
    print(node) {
        this.value.push(node.value)
        if (node.next) {
            this.print(node.next)
        }
    }
    pushToArray(node) {
        if (!node) return this.array
        if (node.value) {
            this.array.push(node.value)
        }
        this.pushToArray(node.next)
    }
    getArrayReverse() {
        return this.array.reverse()
    }
}


const list = new LinkedList();
Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000)).forEach(element => {
    list.insert(element)
});

list.print(list.head)
list.pushToArray(list.head)
console.log(list.getArrayReverse())
console.log(list.value)