let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1을 만나면 dfs start
let dy = [0,1,0,-1];
let dx = [1,0,-1,0];

// 입력
let T = Number(input[0]);

let line = 1;
let visited;
let graph;
let ans;
while(T--){
    // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 개수(K)
    let [M,N,K] = input[line].split(' ').map(Number);
    graph = []; // 그래프 정보
    visited = [];
    for(let i=0;i<N;i++) {
        graph[i] = new Array(M).fill(0);
        visited[i] = new Array(M).fill(false);
    }
    for(let i=1;i<=K;i++){
        let [x,y] = input[line+i].split(' ').map(Number);
        graph[y][x] = 1;
    }


    ans = 0;
    for(let i=0;i<N;i++){
        for(let j = 0;j<M;j++){
            if(graph[i][j] === 1 && !visited[i][j]){
                dfs(M,N,i,j);
                ans++;
            }
        }
    }
    line+= K+1;
    console.log(ans);
}

function dfs(m,n,y,x){
    visited[y][x] = true;
    for(let k = 0;k<4;k++){
        let ny = y + dy[k];
        let nx = x + dx[k];
        if(ny < 0 || nx < 0 || ny >=n || nx >=m)continue;
        if(graph[ny][nx] === 0)continue;
        if(visited[ny][nx])continue;
        dfs(m,n,ny,nx);
    }
}