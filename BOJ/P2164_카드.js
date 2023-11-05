const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  size() {
    return this.length;
  }
}

const linkedList = new LinkedList();

for (let i = 1; i <= N; i++) {
  linkedList.push(i);
}

while (linkedList.size() > 1) {
  linkedList.removeHead();

  const node = linkedList.getHead();
  linkedList.removeHead();
  linkedList.push(node);
}

console.log(linkedList.getHead());
