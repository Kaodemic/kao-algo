import MinHeap from '../heap/MinHeap'
import Comparator from '../../src/utils/comparator/Comparator'


export default class PriorityQueue extends MinHeap {
    constructor() {
        // Call minHip contructor first
        super();

        // Setup priorities map
        // eslint-disable-next-line no-undef
        this.priorities = new Map()

        // User custom comparator for heap elements that will take element priority
        // insted of element value into account
        this.compare = new Comparator(this.comparePriority.bind(this))
    }

    /**
     * Add item to priority queue.
     * @param {*} item - item we're going to add to the queue.
     * @param {number} [priority] - items priority
     * @return {PriorityQueue}
     */
    add(item, priority = 0) {
    }

}
