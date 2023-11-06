const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

// 정확하게 Nkg 배달, 봉투는 3kg , 5kg가 있을 때 최소한의 봉투만 사용하는 방법
const MAX = Number.MAX_SAFE_INTEGER;
const dp = new Array(N + 1).fill(MAX);

dp[3] = 1;
dp[5] = 1;

for (let i = 6; i < N + 1; i++) {
  dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
}

console.log(dp[N] >= MAX ? -1 : dp[N]);
