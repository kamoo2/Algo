const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// N : A의 배열의 길이
// M : B의 배열의 길이
const [N,M] = input[0].split(' ').map(Number);

const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

// const arr= [...A,...B].sort((a,b)=>a-b);
//
// let ans = ''
//
// for(let x of arr){
//     ans += `${x} `;
// }
//
// console.log(ans);

let left = 0;
let right = 0;
let result = [];

while(left < N && right < M){
    if(A[left] <= B[right]){
        result.push(A[left]);
        left++;
    }else{
        result.push(B[right]);
        right++;
    }
}

while(left < N){
    result.push(A[left]);
    left++;
}

while(right < M){
    result.push(B[right]);
    right++;
}

console.log(result.join(' '));