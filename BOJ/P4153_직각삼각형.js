const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let idx = 0;
let ans = "";
while (true) {
  const [h, w, d] = input[idx++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (h === 0 && w === 0 && d === 0) break;
  if (h * h + w * w === d * d) ans += "right\n";
  else ans += "wrong\n";
}

console.log(ans);
