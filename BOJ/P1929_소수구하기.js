const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const primeList = new Array(M + 1).fill(true);
// N ~ M 사이의 소수 출력

primeList[1] = false; // 1은 소수 X

// 에라토스테네스의 체 알고리즘
for (let i = 2; i <= M; i++) {
  if (!primeList[i]) continue;

  for (let j = i * i; j <= M; j += i) {
    primeList[j] = false;
  }
}

let ans = "";

for (let i = N; i <= M; i++) {
  if (primeList[i]) ans += `${i}\n`;
}

console.log(ans);
