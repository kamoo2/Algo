const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// https://www.acmicpc.net/problem/11404
// N : 노드 (도시)
// M : 간선 (버스)
// M개의 버스 노선 정보

const N = Number(input[0]);
const M = Number(input[1]);

const map = [];
const INF = Number.MAX_SAFE_INTEGER;

for(let i=1;i<=N;i++){
    map[i] = [0,...new Array(N).fill(INF)];
}

for(let i=2;i<M+2;i++){
    const [a,b,c] = input[i].split(' ').map(Number);
    map[a][b] = Math.min(map[a][b],c);
}

for(let k=1;k<=N;k++){
    for(let a=1;a<=N;a++){
        for(let b=1;b<=N;b++){
            if(a === b) continue;
            const cost = map[a][k] + map[k][b];
            map[a][b] = Math.min(map[a][b],cost);
        }
    }
}

let ans = '';

for(let i=1;i<=N;i++){
    for(let j=1;j<=N;j++){
        if(map[i][j] === INF) ans += '0 ';
        else ans += `${map[i][j]} `;
    }
    ans+= '\n';
}

console.log(ans);