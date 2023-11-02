const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

/**
 * https://www.acmicpc.net/problem/1018
 * */

const [N, M] = input[0].split(" ").map(Number);

const SIZE = 8; // graph size
const graph = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));
let ans = Number.MAX_SAFE_INTEGER;

// graph 만들기 , W = true , B = false
for (let i = 1; i < N + 1; i++) {
  const line = input[i].split("");
  for (let j = 0; j < M; j++) {
    graph[i][j + 1] = line[j];
  }
}

for (let i = 1; i <= N - 7; i++) {
  for (let j = 1; j <= M - 7; j++) {
    check(i, j);
  }
}

function check(x, y) {
  let cnt = 0;
  let first = graph[x][y];

  for (let i = x; i < x + SIZE; i++) {
    for (let j = y; j < y + SIZE; j++) {
      if (first !== graph[i][j]) cnt++;
      first = first === "W" ? "B" : "W"; // 옆으로 이동할 때 바껴야함
    }
    first = first === "W" ? "B" : "W"; // 다음 열로가면 바껴야함
  }

  cnt = Math.min(cnt, 64 - cnt); // 검은색으로 시작하는 체스판과 하얀색으로 시작하는 체크판의 경우 중 최소값
  ans = Math.min(ans, cnt);
}

console.log(ans);
