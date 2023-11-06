const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const stack = [];

for (let i = 1; i < N + 1; i++) {
  const num = Number(input[i]);
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
