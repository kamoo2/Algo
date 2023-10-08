let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let E = Number(input[1]);

let graph = [];
let visited = Array(N+1).fill(false);
let ans = 0;

for(let i = 0;i<=N;i++){
    graph.push([]);
}

for(let i=0;i<E;i++){
    let [x,y] = input[i+2].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

function dfs(startIdx){
    visited[startIdx] = true;

    for(let x of graph[startIdx]){
        if(visited[x])continue;
        ans++;
        dfs(x);
    }
}

dfs(1);
console.log(ans);
