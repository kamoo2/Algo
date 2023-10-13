let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');



let N = Number(input[0]);

let graph = [];
let group_cnt = 0;
let ans = 0;
let ansArr = [];
let visited = [];
let dy = [1,0,-1,0];
let dx = [0,1,0,-1];


// 맵 그래프 생성
for(let i=1;i<=N;i++){
    let line = input[i].split('').map(Number);
    graph.push(line);
}

for(let i=0;i<N;i++){
    visited[i] = new Array(N).fill(false);
}

for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(graph[i][j] === 1 && !visited[i][j]){
            ans = 0;
            dfs(i,j);
            group_cnt++;
            ansArr.push(ans);
        }
    }
}

function dfs(y,x){
    ans++;
    visited[y][x] = true;
    for(let k=0;k<4;k++){
        let ny = y + dy[k];
        let nx = x + dx[k];
        if(ny < 0 || nx < 0 || ny >= N || nx >= N)continue;
        if(graph[ny][nx] === 0)continue;
        if(visited[ny][nx])continue;
        dfs(ny,nx);
    }
}

console.log(group_cnt);
for(let x of ansArr.sort((a,b)=>a-b)){
    console.log(x);
}