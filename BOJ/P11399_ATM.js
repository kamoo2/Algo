const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

const times = input[1].split(" ").map(Number);

const ans = times
  .sort((a, b) => a - b)
  .reduce(
    (acc, cur) => {
      acc[1] += cur;
      acc[0] += acc[1];
      return acc;
    },
    [0, 0],
  );

console.log(ans[0]);
