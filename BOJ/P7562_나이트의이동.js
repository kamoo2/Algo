const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);

let line = 1;
const dy = [-2,-1,1,2,-2,-1,1,2];
const dx = [1,2,2,1,-1,-2,-2,-1];

for(let t=0;t<T;t++){
    const N = Number(input[line]);
    const [sy,sx] = input[line+1].split(' ').map(Number);
    const [ey,ex] = input[line+2].split(' ').map(Number);

    const visited = new Array(N).fill(0).map((_)=>new Array(N).fill(false));
    const dist = new Array(N).fill(0).map((_)=>new Array(N).fill(0));

    bfs(sy,sx,ey,ex,N,visited,dist);

    console.log(dist[ey][ex]);
    line += 3;
}

function bfs(sy,sx,ey,ex,N,visited,dist){
    const queue = [];
    queue.push([sy,sx]);
    dist[sy][sx] = 0;
    visited[sy][sx] = true;

    while(queue.length !== 0){
        const [y,x] = queue.shift();

        for(let k=0;k<8;k++){
            const ny = y + dy[k];
            const nx = x + dx[k];

            if(ny < 0 || nx < 0 || ny >=N || nx >= N)continue;
            if(visited[ny][nx])continue;
            queue.push([ny,nx]);
            visited[ny][nx] = true;
            dist[ny][nx] = dist[y][x] + 1;
        }
    }
}