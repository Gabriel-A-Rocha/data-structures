class Queue {
  collection = [];

  enqueue = (value) => {
    this.collection.push(value);
  };

  dequeue = () => {
    this.collection.shift();
  };

  front = () => {
    return this.collection[0];
  };

  size = () => {
    return this.collection.length;
  };

  print = () => {
    return this.collection;
  };

  isEmpty = () => {
    return this.collection.length === 0;
  };
}

const queue = new Queue();

queue.enqueue("Chris");
queue.enqueue("Ted");
queue.enqueue("Sarah");

console.log("queue", queue.print());
console.log("size", queue.size());

queue.dequeue();
console.log("queue", queue.print());

console.log("front", queue.front());

console.log("size", queue.size());

console.log("isEmpty", queue.isEmpty());

queue.dequeue();
queue.dequeue();
console.log("queue", queue.print());

console.log("isEmpty", queue.isEmpty());
