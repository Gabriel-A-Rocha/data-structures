const word = "racecar";

const stack = [];

for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}

console.log("stack", stack);

let reverseWord = "";

while (stack.length > 0) {
  reverseWord += stack.pop();
}

console.log("reverse word", reverseWord);

if (word === reverseWord) console.log("It's a palindrome");
else console.log("Not a palindrome");
