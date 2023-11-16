const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => new Array(M).fill(0));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const distance = Array.from({ length: N }, () => new Array(M).fill(0));
const start = { x: 0, y: 0 };
for (let i = 0; i < N; i++) {
  const line = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    if (line[j] === 2) {
      start.x = j;
      start.y = i;
    }
    graph[i][j] = line[j];
  }
}

// BFS로 돌리면서 최단 거리 기록

const dist = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const queue = [];

bfs(start.y, start.x);

function bfs(y, x) {
  queue.push([y, x]);
  distance[y][x] = 0;
  graph[y][x] = 0;
  visited[y][x] = true;

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let [dx, dy] of dist) {
      const ny = y + dy;
      const nx = x + dx;

      if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
      if (graph[ny][nx] === 0) continue;
      if (visited[ny][nx]) continue;
      queue.push([ny, nx]);
      visited[ny][nx] = true;
      distance[ny][nx] = distance[y][x] + 1;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 원래 갈 수 있는 땅이라는건 graph[i][j] === 1 이라는 것
    // 근데 도달할 수 없다는 건 visited[i][j] = false 라는 것
    if (graph[i][j] === 1 && !visited[i][j]) distance[i][j] = -1;
  }
}

let ans = "";
for (let line of distance) {
  ans += line.join(" ") + "\n";
}

console.log(ans);
