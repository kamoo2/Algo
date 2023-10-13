const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// N : 랜선의 개수
// M : 만들어야하는 랜선의 개수
const [N,M] = input[0].split(' ').map(Number);

const data = [];

for(let i =1;i<=N;i++){
    data.push(Number(input[i]));
}

// data : 랜선의 길이를 담는 배열

let L = 1;
let R = data.reduce((a,b)=>Math.max(a,b));
let ans = 0;

while(L<=R){
    let mid = parseInt((L+R)/2);

    let cnt = 0;

    for(let x of data){
        cnt += parseInt(x / mid);
    }
    if(M <= cnt){
        L = mid + 1;
        ans = mid;
    }else{
        R = mid - 1;
    }
}

console.log(ans);