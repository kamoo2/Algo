const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

const X = Number(input[2]);

let L = 0;
let R = N-1;
let ans = 0;

while(L < R){
   const sum = arr[L] + arr[R];

   if(sum === X){
       ans++;
       L++;
       R--;
   }else if(sum < X){
       L++;
   }else{
       R--;
   }
}

console.log(ans);