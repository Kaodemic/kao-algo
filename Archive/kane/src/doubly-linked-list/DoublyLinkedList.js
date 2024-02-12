import DoublyLinkedListNode from "./DoublyLinkedListNode";

const Comparator = () => { };

export default class DoublyLinkedList {
    /**
     * @param {Function} [comparatorFunction]
     */

    constructor(comparatorFunction) {
        /**
         * @var DoublyLinkedListNode
         */
        this.head = null;
        this.tail = null;

        this.compare = new Comparator(comparatorFunction)
    }

    prepend(value) {
        const newNode = new DoublyLinkedListNode(value, this.head)
        if (this.head) {
            this.head.previous = newNode
        }
        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }

        return this
    }

    append(value) {
        const newNode = new DoublyLinkedListNode(value, this.tail)
        //no head => tail = head
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return this
        }

        this.tail.next = newNode
        newNode.previous = this.tail

        this.tail = newNode
        return this
    }

    delete(value) {
        if (!this.head) {
            return null
        }

        let deletedNode = null
        let currentNode = this.head

        while (currentNode) {
            if (this.currentNode.value === value) {
                deletedNode = currentNode
                if (deletedNode === this.head) {

                    this.head = deletedNode.next

                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (deletedNode == this.tail) {
                        this.tail = null
                    }
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.previous
                    this.tail.next = null

                } else {
                    //Node in middle
                    //
                }
            }
        }
    }


}
