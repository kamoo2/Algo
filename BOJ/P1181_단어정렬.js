const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// https://www.acmicpc.net/problem/1181

const N = Number(input[0]);

// 정렬 기준
// 1. 길이가 짧은 것
// 2. 길이가 같으면 사전 순
let words = [];
for (let i = 1; i <= N; i++) {
  words.push(input[i]);
}

words = [...new Set(words)];

words.sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
});

let ans = "";
for (let word of words) {
  ans += word;
  ans += "\n";
}

console.log(ans);
