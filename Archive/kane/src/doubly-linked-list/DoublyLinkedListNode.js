export default class DoublyLinkedListNode {
    constructor(v, n = null, p = null) {
        this.v = v;
        this.n = n;
        this.p = p;
    }

    toString(cb) {
        return cb ? cb(this.v) : `${this.v}`
    }
}
