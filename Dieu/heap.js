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
  }

  extractMax() {
    //         30 --> the first value and max value in the heap
    //     20      11
    //  7     9   5  --> last element
    let max = this.heap[0]; // get the Max value in the heap -> 30
    let lastElement = this.heap.pop(); // get the last element -> 5
    this.heap[0] = lastElement; // replace the first element with the last element
    //         5 --> the first value and max value in the heap
    //     20      11
    //  7     9  30  --> last element
    this.sinkDown(0); // execute the method sinkdown(0); with the first value; 5
    return max;
  }

  sinkDown(idx) {
    let left = idx * 2 + 1; // get the left index
    let right = idx * 2 + 2; // get the right index
    let largest = idx;
    const length = this.heap.length; // get the length of the heap

    // if left child is greater than parent
    if (left <= length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    // if right child is greater than parent
    if (right <= length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // swap
    if (largest !== idx) {
      //   [this.heap[largest], this.heap[idx]] = [
      //     this.heap[idx],
      //     this.heap[largest],
      //   ];
      let temp = this.heap[idx];
      this.heap[idx] = this.heap[largest];
      this.heap[largest] = temp;
      this.sinkDown(largest);
    }
  }
}

let h = new Heap();
h.insert(11);
h.extractMax();
console.log(h);
