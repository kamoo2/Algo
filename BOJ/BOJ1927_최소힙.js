const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;

  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  isEmpty = () => this.heap.length === 0;

  swap = (idx1, idx2) =>
    ([this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]);

  insert = (value) => {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    // 부모와 비교해 가면서 swap
    while (currentIndex > 0) {
      let parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[parentIndex] < this.heap[currentIndex]) break;
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  };

  delete = () => {
    if (this.heap.length === 0) return 0;
    const root = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      let index = 0;
      while (true) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let swapIdx = null;

        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[index]
        ) {
          swapIdx = leftChildIndex;
        }

        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] <
            (swapIdx === null ? this.heap[index] : this.heap[leftChildIndex])
        ) {
          swapIdx = rightChildIndex;
        }

        if (swapIdx === null) break;

        this.swap(index, swapIdx);
        index = swapIdx;
      }
    }

    return root;
  };
}

const heap = new Heap();

let ans = "";

for (let i = 1; i <= N; i++) {
  const num = Number(input[i]);

  if (num === 0) ans += heap.delete() + "\n";
  else heap.insert(num);
}

console.log(ans);
