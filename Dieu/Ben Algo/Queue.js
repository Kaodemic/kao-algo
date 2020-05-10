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
    const fs = require("fs");
    const data = new Uint8Array(Buffer.from("Queue.js"));
    fs.writeFile("QueueDieu.txt", data, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

let capacity = 10;
const Aqueue = new Queue(capacity);
Aqueue.enqueue(1);
Aqueue.enqueue(2);
Aqueue.enqueue(3);
Aqueue.print();
Aqueue.dequeue();
Aqueue.print();
Aqueue.saveFile();

function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };
}

// var pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq.enqueue(["Briana Swift", 2]);
// pq.printCollection();
// pq.dequeue();
//console.log(pq.front());
// pq.printCollection();
