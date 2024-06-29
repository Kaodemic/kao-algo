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
    constructor(value, next, prev) {
        this.next = next || null
        this.value = value
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.array = []
        this.value = [];
        this.result = [];
    }
    insert(data) {
        if (!this.head) {
            const node = new Node(data, null, null);
            this.head = node;
        } else {
            let node = this.head;
            this.insertNode(node, new Node(data, null, node))
        }
    }
    insertNode(node, newNode) {
        if (node.next) {
            this.tail = newNode
            this.insertNode(node.next, newNode)
        } else {
            node.next = newNode;
            newNode.prev = node;

        }
    }
    print(node) {
        console.log(node)
        if (node.next) {
            this.print(node.next)
        }
    }
    printReverse(node) {
        this.result.push(node.value)
        if (node.prev) {
            this.printReverse(node.prev)
        }else{
            return this.result
        }
    }
}

var input = 10000;
function main() {
    Array.from({ length: input }, () => Math.floor(Math.random() * input)).forEach(element => {
        list.insert(element)
    });
    list.printReverse(list.tail);// list.print(list.head)
    console.log(list.result)
}

var startTime = performance.now();
const list = new LinkedList();
main()

var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;

// Get memory usage
const memoryData = process.memoryUsage();
const memoryUsage = {
    rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size (total memory allocated for the process execution)`,
    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> Total heap size`,
    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> Heap used by the application`
};

console.log(memoryUsage);