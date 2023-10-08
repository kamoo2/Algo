let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 입력 값
// N : 노드의 개수
// M : 거리를 알고 싶은 노드 쌍 개수
// 연결된 두 점과 거리
// M개의 노드쌍

let [N,M] = input[0].split(' ').map(Number);
let graph = [];
let visited;
let distanced;
for(let i=1;i<=N;i++) graph[i] = [];

for(let i=1;i<N;i++){
    // x : 노드1 y : 노드2 d : 노드1과노드2의 거리
    let [x,y,d] = input[i].split(' ').map(Number);
    graph[x].push([y,d]);
    graph[y].push([x,d]);
}

// 각 쿼리 마다 거리 계산
for(let i=0;i<M;i++){
    let [x,y] = input[N+i].split(' ').map(Number);
    visited = new Array(N+1).fill(0);
    distanced = new Array(N+1).fill(-1); // 시작 노드에서 모든 노드에 방문했을 때의 거리
    dfs(x,0);
    console.log(distanced[y]);
}

function dfs(x,dist){
    visited[x] = 1; // 방문 체크
    distanced[x] = dist; // 거리를 갱신
    for(let node of graph[x]){
        let nx = node[0];
        let cost = node[1];
        if(visited[nx])continue;
        dfs(nx,dist+cost);
    }
}
