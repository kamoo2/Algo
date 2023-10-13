const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

const data = [0,...input[1].split(' ').map(Number)];

const M = Number(input[2]);

const P = Array(N+1).fill(0);

for(let i=1;i<=N;i++){
    P[i] = P[i-1] + data[i];
}

let ans = '';
for(let i=3;i<M+3;i++){
    const [a,b] = input[i].split(' ').map(Number);

    ans += `${P[b] - P[a-1]}\n`;
}

console.log(ans);