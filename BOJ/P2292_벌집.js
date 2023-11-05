const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);

// 1, 2 ~ 7, 8 ~ 19,

let depth = 1;
let first = 1;
let last = 1;

while (true) {
  if (first <= N && N <= last) break;
  let plus = 6 * depth;
  first = last + 1;
  last += plus;
  depth++;
}

console.log(depth);
