class Queue {
  constructor(capacity) {
    this.data = [];
    this.capacity = capacity;
    this.size = 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size == 0;
  }

  enqueue(value) {
    if (!this.isFull()) {
      this.size++;
      return this.data.push(value);
    } else {
      return false;
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.size--;
      return this.data.shift();
    } else {
      return false;
    }
  }

  front() {
    if (this.isEmpty()) return undefined;
    return this.data[0];
  }

  rear() {
    if (this.isEmpty()) return undefined;
    return this.data[this.size - 1];
  }

  clear() {
    this.data.length = 0;
    this.size = 0;
  }

  print() {
    console.log(this.data);
  }

  saveFile() {
    // console.log("start saving file...");
    console.log("item to saved", this.data);
    const fs = require("fs");
    const data = new Uint8Array(Buffer.from(this.data));
    const dataToSaved = data.toString();
    fs.writeFile("QueueDieu.txt", dataToSaved, (err) => {
      if (err) throw err;
      console.log("The file has been saved!", dataToSaved);
    });
  }
}

let capacity = 10;
const Aqueue = new Queue(capacity);
Aqueue.enqueue(1);
Aqueue.enqueue(2);
Aqueue.enqueue(3);
// Aqueue.print();
Aqueue.saveFile();
