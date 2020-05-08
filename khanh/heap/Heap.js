import Comparator from '../../utils/comparator/Comparator'



export default class Heap {
    LEFT = 1;
    MID = 2;
    RIGHT = 3;

    _NODE = 3;
    constructor(comparatorFunction) {
        if (new.target == Heap) {
            throw new TypeError('Cannot contructor Heap instance directly')
        }

        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);

    }
    /**
     * @function getHeapLength
     */
    hLea() {
        return this.heapContainer.length
    }

    getLeftChildIndex(parentIndex) {
        return (this._NODE * parentIndex) + this.LEFT
    }


    getMidChildIndex(parentIndex) {
        return (this._NODE * parentIndex) + this.MID
    }

    getRightChildIndex(parentIndex) {
        return (this._NODE * parentIndex) + this.RIGHT
    }

    getParentIndex(childIndex) {
        return Math.floor(childIndex - 1) / _NODE
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) > 0
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.ghl()
    }

    hasMidChild(parentIndex) {
        return this.getMidChildIndex(parentIndex) < this.ghl()
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.ghl()
    }

    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    midChild(parentIndex) {
        return this.heapContainer[this.getMidChildIndex(parentIndex)];
    }

    peek() {
        return this.ghl() ? null : this.heapContainer[0]
    }

    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    add(item) {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    heapifyUp(customStartIndex) {
        const heapLength = this.ghl();
        let currentIndex = customStartIndex || heapLength - 1;

        while (
            this.hasParent(currentIndex)
            && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
        ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(custom) {
        // Compare the parent element to its children and swap parent with the appropriate
        // child (smallest child for MinHeap, largest child for MaxHeap).
        // Do the same for next children after swap.
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (
                this.hasRightChild(currentIndex)
                && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
            ) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (this.pairIsInCorrectOrder(
                this.heapContainer[currentIndex],
                this.heapContainer[nextIndex],
            )) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    poll() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }


        const item = this.heapContainer[0];

        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();
        return item;
    }


    /**
     * Checks if pair of heap elements is in correct order.
     * For MinHeap the first element must be always smaller or equal.
     * For MaxHeap the first element must be always bigger or equal.
     *
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    /* istanbul ignore next */
    pairIsInCorrectOrder(fistElement, secondElement) {
        throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.ghl();
    }

    /**
     * @return {string}
     */
    toString() {
        return this.heapContainer.toString();
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Number[]}
     */
    find(item, comparator = this.compare) {
        const foundItemIndices = [];

        this.heapContainer.map((node, index) => {
            if (comparator.equal(item, this.heapContainer[index])) {
                foundItemIndices.push(index)
            }
        })

        return foundItemIndices
    }



}

