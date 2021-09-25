class Stack {
  count = 0;
  values = {};

  push(value) {
    this.values[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    const value = this.values[this.count - 1];
    delete this.values[this.count - 1];
    this.count--;
    return value;
  }

  size() {
    return this.count;
  }

  peek() {
    if (this.count === 0) return undefined;

    return this.values[this.count - 1];
  }
}

const stack = new Stack();

const word = "racecar";
for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}

let reverseWord = "";
while (stack.size() > 0) {
  reverseWord += stack.pop();
}

console.log(reverseWord);
