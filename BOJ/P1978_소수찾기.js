const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

let cnt = 0;
for (let num of nums) {
  if (isPrime(num)) cnt++;
}

console.log(cnt);
