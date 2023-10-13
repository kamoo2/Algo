const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N,M] = input[0].split(' ').map(Number);

const trees = input[1].split(' ').map(Number);

let L = 1;
let R = trees.reduce((a,b)=>Math.max(a,b));
let result = 0; // 절단기의 높이

while(L<=R){
    let mid = parseInt((L+R)/2);

    let cnt = 0;
    for(let x of trees){
        // 나무를 자른다.
        if(x > mid){
            cnt += x-mid;
        }
    }


    if(cnt >= M){
        L = mid + 1;
        result = mid;
    }else{
        R = mid -1;
    }
}

console.log(result);

