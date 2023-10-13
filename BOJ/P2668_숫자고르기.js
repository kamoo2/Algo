let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const map = new Array(N+1);
const visited = new Array(N+1).fill(false);
const finished = new Array(N+1).fill(false);
let ans = 0;
const result = [];

for(let i=1;i<=N;i++){
    map[i] = Number(input[i]);
}

for(let i=1;i<=N;i++){
    if(!visited[i]) dfs(i);
}

function dfs(node){
    visited[node] = true; // 방문 체크

    const next = map[node]; // 다음 노드
    if(!visited[next]) dfs(next); // 다음 노드에 방문하지 않았다면 dfs
    else if(!finished[next]){ // 방문했는데 완료되지 않은 노드 (사이클 완성)
          for(let i = next; i!==node; i = map[i]){
              result.push(map[i]);
              ans+=1;
          }
          result.push(map[node]);
          ans+=1;
    }
    finished[node] = true;
}

console.log(ans);
result.sort((a,b)=>a-b).forEach(item=>console.log(item));