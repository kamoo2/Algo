let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const MAX = 100001;
const [N,M] = input[0].split(' ').map(Number);
const visited = new Array(MAX).fill(false);
const dist = new Array(MAX).fill(0);
// N : 수빈이 위치
// M : 동생 위치

function bfs(){ // 너비 우선 탐색
    const Q = [];
    Q.push(N); // 현재 위치 저장
    visited[N] = true;
    dist[N] = 0;


    while(Q.length !== 0){ // Q가 빌 때까지 반복
        let curIdx = Q.shift();
        if(curIdx === M){
            return dist[curIdx];
        }
        for(let nextIdx of [curIdx-1,curIdx+1,curIdx*2]){
            // 공간을 벗어난 경우 무시
            if(nextIdx < 0 || nextIdx >= MAX)continue;
            // 아직 방문하지 않은 곳
            if(!visited[nextIdx]){
                Q.push(nextIdx);
                visited[nextIdx] = true;
                dist[nextIdx] = dist[curIdx] + 1;
            }
        }
    }
}


console.log(bfs());
