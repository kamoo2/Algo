let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let visited = Array(N+1).fill(false); // 정답 2차원 배열

let selected = [];

let ans = "";
function dfs(k){ // n개의 숫자의 모든 순열을 만드는 함수
    // 1 ~ N까지의 숫자
    if(k === N+1){
        // complete code
        for(let x of selected) ans += x + " ";
        ans+="\n";
        return;
    }
    // 마지막 노드에 도착하지 못한 경우
    for(let i=1;i<=N;i++){
        if(visited[i])continue;
        visited[i] = true;
        selected.push(i);
        dfs(k+1);
        visited[i] = false;
        selected.pop();
    }
}


dfs(1);

console.log(ans);