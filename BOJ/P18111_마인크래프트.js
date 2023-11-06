const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 세로 N, 가로 M 크기의 집터
// 땅을 고르게 하기 위한 작업 경우의수 2개
// 1. (i,j)의 맨 위에있는 블록을 제거 후 인벤토리에 넣기 (2초)
// 2. 인벤토리에서 블록 하나 꺼내서 (i,j)의 맨위에 두기
// 최대한 빠르게 땅 고르기를 해야하는데 이때 걸리는 최소 시간과 그 경우 땅의 높이 출력
const [N, M, B] = input[0].split(" ").map(Number);

// 중요 포인트
// 사용가능 블록 = 인벤토리 안에 있는 블록 + 땅에 있는 블록
// 평탄화할 땅에 쌓아질 블록의 최대 높이 = 사용가능 블록 / (N*M)

const map = Array.from({ length: N }, () => new Array(M));

let total = B; // 사용가능 블록

for (let i = 0; i < N; i++) {
  const line = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    map[i][j] = line[j];
    total += map[i][j];
  }
}

// 한칸에 가질 수 있는 최대 높이
let limitH = Math.floor(total / (N * M));
if (limitH > 256) limitH = 256;

let minTime = Number.MAX_SAFE_INTEGER;

let finalH = limitH;
while (limitH >= 0) {
  // 평탄화를 limitH로 했을 때의 최소 시간 구하기
  let curTime = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] <= limitH) {
        curTime += limitH - map[i][j];
      } else {
        curTime += 2 * (map[i][j] - limitH);
      }
    }
  }
  if (curTime < minTime) {
    minTime = curTime;
    finalH = limitH;
  }
  limitH--;
}

console.log(`${minTime} ${finalH}`);
