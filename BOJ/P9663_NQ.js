let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 전체 맵 크기
let queens = []; // 현재 체스판에 놓인 퀸의 위치 정보

// (x,y)에 놓을 수 있는지 없는지 확인
function possible(x,y) {
    for(let [a,b] of queens){
        if(a === x || b === y) return false; // 행과 열이 같다면 불가
        if(Math.abs(a-x) === Math.abs(b-y))return false; // 대각선에 위치한 경우
    }
    return true;
}

let cnt = 0;
function dfs(row){
    if(row === n) cnt++;
    for(let i =0;i<n;i++){ // 현재 행(row)에 존재하는 열을 하나씩 확인하며
        if(!possible(row,i))continue; // 놓을 수 없다면 무시
        queens.push([row,i]); // 현재 위치에 퀸을 놓기
        dfs(row+1);
        queens.pop(); // 현재 위치에서 퀸 제거
    }
}

dfs(0);
console.log(cnt);