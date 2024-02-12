import Heap from "./Heap";
export default class MinHeap extends Heap {
    /**
     * Check if pair of heap elements is in correct order 
     * For MinHeap the firt element must be always smaller or equal
     * For MaxHeap the first element must be alway biger or equal
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */

    pairIsInCorrectOrder(firstElement, secondElement) {
        return this.compare.lessThanOrEqual(firstElement, secondElement)
    }
}
