const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);

class Node {
  num;
  priority;
  constructor(num, priority) {
    this.num = num;
    this.priority = priority;
  }
}

// 1번부터 N번까지의 프린트
let ans = "";

for (let t = 1; t <= T * 2; t += 2) {
  const [N, M] = input[t].split(" ").map(Number);
  const priority = input[t + 1]
    .split(" ")
    .map((item, idx) => new Node(idx, item));

  const output = [];

  while (priority.length > 0) {
    // 만약 현재 뺀 item보다 우선순위가 높은 애가 있다면 item을 push
    // 없다면 output에 push 하고 continue;
    const data = priority.shift();
    let flag = true;

    for (let p of priority) {
      if (data.priority < p.priority) {
        priority.push(new Node(data.num, data.priority));
        flag = false;
        break;
      }
    }

    if (flag) output.push(data);
  }

  for (let i = 0; i < N; i++) {
    if (output[i].num === M) {
      ans += `${i + 1}\n`;
      break;
    }
  }
}

console.log(ans);
