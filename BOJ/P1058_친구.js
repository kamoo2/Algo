const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// https://www.acmicpc.net/problem/1058
/**
 * N : 노드 (사람)
 */

const N = Number(input[0]);

// 플로이드 워셜 알고리즘
// A -> B가 친구라면 거리가 1인 친구
// A -> B가 친구 B -> C가 친구 A -> C는 거리가 2인 친구

const INF = Number.MAX_SAFE_INTEGER;

// map[N+1][N+1]인 그래프 만들기
const map = [];

for(let i=1;i<=N;i++){
    map[i] = [0,...new Array(N).fill(INF)];

    const line = [0,...input[i].split('')];

    for(let j=1;j<=N;j++){
        if(line[j] === 'Y') map[i][j] = 1;
    }
}

for(let i=1;i<=N;i++)map[i][i] = 0;

const two = new Array(N+1).fill(0);

// 플로이드 워셜 알고리즘을 이용해 노드 사이의 최단 거리를 계산
for(let k=1;k<=N;k++){
    for(let a=1;a<=N;a++){
        for(let b=1;b<=N;b++){
            const cost = map[a][k] + map[k][b];
            map[a][b] = Math.min(map[a][b],cost);
        }
    }
}

// 노드 별 최단 거리가 2이하인 개수를 계산
for(let i=1;i<=N;i++){
    for(let j=1;j<=N;j++){
        if(i === j) continue;
        if(map[i][j] <= 2)two[i]++;
    }
}
console.log(two.reduce((a,b)=>Math.max(a,b),0));