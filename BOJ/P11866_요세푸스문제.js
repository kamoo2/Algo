const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const Q = [];
for (let i = 1; i <= N; i++) {
  Q.push(i);
}

let ans = "<";
while (Q.length > 0) {
  for (let i = 1; i < M; i++) {
    Q.push(Q.shift());
  }
  ans += `${Q.shift()}, `;
}

ans = ans.slice(0, -2);
ans += ">";
console.log(ans);
