let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let foods = [];
let min = Number.MAX_VALUE;

for(let i=1;i<=N;i++){
    foods.push(input[i].split(' ').map(Number));
}

function dfs(start,sin,ssn){
    if(start > 0){
        min = Math.min(min,Math.abs(sin-ssn));
    }

    for(let a=start;a<N;a++){
        dfs(a+1,sin*foods[a][0],ssn+foods[a][1]);
    }
}

dfs(0,1,0);
console.log(min);