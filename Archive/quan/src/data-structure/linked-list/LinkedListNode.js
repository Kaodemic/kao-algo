export default class LinkedListNode {
    constructor(value, next = null) {
       this.value = value;
       this.next = next;
    }

    toString(callBack) {
        return callBack ? callBack(this.value) : `${this.value}`;
    }
}
