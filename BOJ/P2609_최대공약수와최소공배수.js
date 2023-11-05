const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
function GCD(a, b) {
  if (b === 0) return a;
  else return GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

console.log(GCD(N, M));
console.log(LCM(N, M));
