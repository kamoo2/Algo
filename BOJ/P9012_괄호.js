const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

const map = new Map();
map.set("(", ")");

let ans = "";
for (let i = 1; i <= N; i++) {
  const stack = [];
  const brackets = input[i].split("");
  for (let bracket of brackets) {
    if (map.has(bracket)) {
      stack.push(bracket);
    } else {
      let open = stack.pop();
      if (!map.has(open)) {
        stack.push(open);
        stack.push(bracket);
      }
    }
  }

  if (stack.length === 0) {
    ans += "YES";
  } else {
    ans += "NO";
  }
  ans += "\n";
}

console.log(ans);
