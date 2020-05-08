class Heap {
  constructor() {
    this.heap = [30, 20, 10, 7, 9, 5]; //11
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1; // 6
    while (index > 0) {
      let element = this.heap[index]; // get the last element of the heap # 11
      let parentIndx = Math.floor((index - 1) / 2); // index  = 2 of the heap
      let parent = this.heap[parentIndx]; // 10
      //         30
      //     20      10 --> parent
      //  7     9   5   11 --> element
      if (parent >= element) break; // if(10 > 11) false
      this.heap[index] = parent; //  swap element 11 as parent
      this.heap[parentIndx] = element; //  swap parent 10 as element
      //         30
      //     20      11--> parent
      //  7     9   5   10 --> element
      index = parentIndx;
    }
    console.log(this.heap);
  }
}

let h = new Heap();
h.insert(11);
