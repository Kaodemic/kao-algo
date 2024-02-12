import Heap from "./Heap";
export default class MaxHeap extends Heap {
    /**
     * Check if pair of heap elements is in correct order 
     * For MinHeap the firt element must be always smaller or equal
     * For MaxHeap the first element must be alway biger or equal
     */

    pairIsInCorrectOrder(firstElement, secondElement) {
        return this.compare.greaterThanOrEqual(firstElement, secondElement)
    }
}
