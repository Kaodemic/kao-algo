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




function main() {
    const list = new LinkedList();
    Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000)).forEach(element => {
        list.insert(element)
    });

    list.print(list.head)
    list.pushToArray(list.head)
    console.log(list.getArrayReverse())
    console.log(list.value)
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