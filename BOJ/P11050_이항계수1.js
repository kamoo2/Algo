const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let cnt = 0;

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function binomial(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

console.log(binomial(N, K));
