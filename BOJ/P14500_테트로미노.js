const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const LIMIT = 4;

const [N,M] = input[0].split(' ').map(Number);

const map = Array.from(new Array(N+1),()=>[]);
const visited = Array.from(new Array(N+1),()=>new Array(M+1).fill(0));
const dy = [1,0,-1,0];
const dx = [0,1,0,-1];

let max = Number.MIN_SAFE_INTEGER;

for(let i=1;i<=N;i++){
    map[i] = [0,...input[i].split(' ').map(Number)];
}

const recFunc = (y,x,sum,depth) => {
    if(depth === LIMIT){
        // complete code : 최대값과 비교해서 갱신
        max = Math.max(max,sum);
        return;
    }

    // 다음 갈 수 있는 곳으로 이동
    for(let k =0;k<4;k++){
        let ny = y + dy[k];
        let nx = x + dx[k];
        if(ny <= 0 || nx <= 0 || ny > N || nx > M)continue;
        if(visited[ny][nx])continue;
        if(depth === 2){
            visited[ny][nx] = 1;
            recFunc(y,x,sum+map[ny][nx],depth+1)
            visited[ny][nx] = 0;
        }
        visited[ny][nx] = 1;
        recFunc(ny,nx,sum+map[ny][nx],depth+1);
        visited[ny][nx] = 0;
    }
}

for(let i=1;i<=N;i++){
    for(let j=1;j<=M;j++){
        visited[i][j] = 1;
        recFunc(i,j,map[i][j],1);
        visited[i][j] = 0;
    }
}

console.log(max);