const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// - 이후의 +를 전부 -로 바꾼다
const parts = input[0].split("-");

// 첫뻔째 배열은 그냥 값을 다 더하면 된다.
let sum = parts[0]
  .split("+")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

// 두번째 배열 부터는 빼주면 됨
for (let i = 1; i < parts.length; i++) {
  sum -= parts[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(sum);
