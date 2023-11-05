const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// push
// pop
// size
// empty
// top

const map = new Map();
let stack = [];

map.set("push", (value) => {
  stack.push(value);
});
map.set("pop", () => {
  if (stack.length === 0) return -1;
  else return stack.pop();
});

map.set("size", () => {
  return stack.length;
});
map.set("empty", () => {
  return stack.length === 0 ? 1 : 0;
});
map.set("top", () => {
  if (stack.length === 0) return -1;
  const top = stack.pop();
  stack.push(top);
  return top;
});

const N = Number(input[0]);
let ans = "";
for (let i = 1; i <= N; i++) {
  const operator = input[i].split(" ");
  if (operator.length === 1) {
    ans += `${map.get(operator[0])()}\n`;
  } else {
    // push
    const [oper, value] = operator;
    map.get(oper)(Number(value));
  }
}

console.log(ans);
