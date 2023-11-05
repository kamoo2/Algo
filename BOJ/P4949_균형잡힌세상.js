const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;

const map = new Map();

map.set("(", ")");
map.set("[", "]");

while (true) {
  const str = input[i++];
  const stack = [];
  if (str === ".") break;

  for (let ch of str) {
    if (ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]") {
      const open = stack.pop();
      if (map.get(open) !== ch) {
        stack.push(open);
        stack.push(ch);
      }
    }
  }

  if (stack.length === 0) console.log("yes");
  else console.log("no");
}
