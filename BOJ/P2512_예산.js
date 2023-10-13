const fs =require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let M = Number(input[2]);

let L = 1;
let R = arr.reduce((a,b)=>Math.max(a,b));

let result = 0;

while(L <= R){ // 이진탐색 수행 반복문
    let mid = parseInt((L+R)/2);
    let total = 0; // 배정된 예산의 총액 계산
    for(let x of arr){ // 각 지방에서 요청한 예산을 하나씩 확인하며
        total += Math.min(x,mid); // 예산 배정
    }

    if(total <= M){
        // 예산이 남으니깐 L을 mid로 변경
        result = mid;
        L = mid+1;
    }else{
        R = mid-1;
    }
}

console.log(result);