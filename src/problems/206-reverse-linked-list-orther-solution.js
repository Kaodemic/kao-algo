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
    constructor(head) {
        this.head = head;
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
        if(!node.next){
            this.result.push(node.value)
            return this.result.reverse()
        }
        if (node.next) {
            //this.print(node.next)
            this.result.push(node.value)
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

var input = 10;


function main() {
    Array.from({ length: input }, () => Math.floor(Math.random() * input)).forEach(element => {
        list.insert(element)
    });
    list.printReverse(list.tail);// list.print(list.head)
}

const listInput = new LinkedList();
[1,2,3,4,5].forEach(element => listInput.insert(element)) 

var reverseList = function(head) {
    const list = new LinkedList(head);
    list.print(head);
};

//--------------------
var startTime = performance.now();
reverseList(listInput.head)

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