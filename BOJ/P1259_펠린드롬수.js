const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let cnt = 0;
let ans = "";
while (true) {
  const str = input[cnt++];
  if (str === "0") break;

  const reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) ans += "yes\n";
  else ans += "no\n";
}

console.log(ans);
