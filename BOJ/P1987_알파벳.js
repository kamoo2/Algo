let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [R,C] = input[0].split(' ').map(Number);

console.log('A'.charCodeAt(0));
