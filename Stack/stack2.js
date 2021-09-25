const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.size = function () {
    return this.count;
  };

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    const value = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return value;
  };

  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

const stack = new Stack();

stack.push("new value");
stack.push(234);
console.log("size", stack.size());

console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

console.log("size", stack.size());
