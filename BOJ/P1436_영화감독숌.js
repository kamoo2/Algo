const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

let num = 666;
let count = 1;

while (count < N) {
  num++;
  if (String(num).includes("666")) count++;
}

console.log(num);
