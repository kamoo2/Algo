const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

const data = input[1].split(' ').map(Number).sort((a,b)=>a-b);

const M = Number(input[2]);

const arr = input[3].split(' ').map(Number);


let result = [];
for(let x of arr){
    const lb = lowerBound(0,N-1,x);
    const ub = upperBound(0,N-1,x);
    result.push(ub-lb);
}

function lowerBound(L,R,X){
    let ans = 0;
    while(L<=R){
        let mid = parseInt((L+R)/2);

        if(data[mid] >= X) {
            R = mid -1;
            ans = mid;
        }
        else L = mid + 1;
    }
    return R;
}

function upperBound(L,R,X){
    let ans = 0;
    while(L<=R){
        let mid = parseInt((L+R)/2);

        if(data[mid] > X) {
            R = mid -1;
            ans = mid;
        }
        else L = mid + 1;
    }
    return R;
}

console.log(result.join(' '));