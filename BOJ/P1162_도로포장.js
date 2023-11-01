const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex = (childIndex) => {
    return Math.floor((childIndex - 1) / 2);
  };

  getLeftChildIndex = (parentIndex) => {
    return parentIndex * 2 + 1;
  };

  getRightChildIndex = (parentIndex) => {
    return parentIndex * 2 + 2;
  };

  swap = (idx1, idx2) => {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  };

  isEmpty = () => this.heap.length === 0;

  heapifyUp = () => {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[index][1] > this.heap[parentIndex][1]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  };

  heapifyDown = () => {
    let index = 0;
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let swapIdx = null;

      // 왼쪽 자식 노드와 비교
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] < this.heap[index][1]
      ) {
        swapIdx = leftChildIndex;
      }

      // 오른쪽 자식 노드와 비교
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] <
          (swapIdx === null
            ? this.heap[index][1]
            : this.heap[leftChildIndex][1])
      ) {
        swapIdx = rightChildIndex;
      }

      if (swapIdx === null) break;

      this.swap(index, swapIdx);
      index = swapIdx;
    }
  };

  enqueue = (node) => {
    this.heap.push(node);
    this.heapifyUp();
  };

  dequeue = () => {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return min;
  };
}

function dijkstra(start) {
  const pq = new PriorityQueue();

  pq.enqueue([start, 0, 0]);
  dist[start][0] = 0;

  while (!pq.isEmpty()) {
    let [idx, cost, paved] = pq.dequeue();
    if (dist[idx][paved] < cost) continue;
    for (let [toV, toC] of graph[idx]) {
      // 1. 포장 안하고 가는 경우
      let nCost = cost + toC;
      if (nCost < dist[toV][paved]) {
        dist[toV][paved] = nCost;
        pq.enqueue([toV, nCost, paved]);
      }

      // 2. 포장 하고 가는 경우
      if (paved < K && cost < dist[toV][paved + 1]) {
        dist[toV][paved + 1] = cost;
        pq.enqueue([toV, cost, paved + 1]);
      }
    }
  }
}

const [N, M, K] = input[0].split(" ").map(Number);

const INF = 1e17;
const graph = [];
for (let i = 0; i < N + 1; i++) graph.push([]);
for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]); // 양방향 간선
  graph[b].push([a, c]);
}

const dist = Array.from(Array(N + 1).fill(INF), () =>
  new Array(K + 1).fill(INF),
);

const [start, destination] = [1, N];
dijkstra(start);
console.log(Math.min(...dist[destination]));
