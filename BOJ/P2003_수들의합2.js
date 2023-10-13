const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N,M] = input[0].split(' ').map(Number);

const arr = [0,...input[1].split(' ').map(Number)];

let R = 0;
let ans = 0;
let sum = 0;

for(let L=1;L<=N;L++){
    sum -= arr[L-1];
    while(R<N && sum < M){
        R++;
        sum+=arr[R];
    }

    if(sum === M)ans++;
}

console.log(ans);