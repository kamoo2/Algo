let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);

let line = 1;
let ans = 0;
for(let t=0;t<T;t++){
    const N = Number(input[line]);
    const map = [0,...input[line+1].split(' ').map(Number)];
    const visited = new Array(N+1).fill(0);
    const finished = new Array(N+1).fill(0);
    ans = 0;

    for(let i=1;i<=N;i++){
        if(visited[i])continue;
        dfs(i,map,visited,finished);
    }

    console.log(N-ans);
    line+=2;
}


function dfs(node,map,visited,finished){
    // 현재 노드 방문 체크
    visited[node] = 1;
    const next = map[node]; // 다음 노드

    if(!visited[next]) dfs(next,map,visited,finished);
    else if(!finished[next]) { // 방문 한 곳이지만 완료되지 않은 노드 (사이클이 된 경우)
        for(let i=next;i !== node; i = map[i]){
            ans+=1;
        }
        ans+=1;
    }
    finished[node] = 1;
}