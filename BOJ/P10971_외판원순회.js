let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let arr = [];
let visited = [];
let selected = [];
let min = Number.MAX_VALUE;

visited = Array(N).fill(false);

for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number));
}


function dfs(depth){
    if(depth === N){
        // complete code
        let startNode = selected[0];
        let lastNode = selected[N-1];
        let sum = 0;
        for(let i=0;i<N-1;i++){
            if(arr[selected[i]][selected[i+1]] === 0)return; // 갈 수 없다면 무시
            sum+= arr[selected[i]][selected[i+1]];
        }
        if(arr[lastNode][startNode] === 0)return; // 갈 수 없다면 무시
        sum+= arr[lastNode][startNode];
        min = Math.min(min,sum);
        return;
    }

    for(let i=0;i<N;i++){
        if(visited[i])continue;

        // 처음 방문하는 도시인 경우이거나 마지막으로 돌아오는 상황인 경우
        visited[i] = true;
        selected.push(i);
        dfs(depth +1);
        visited[i] = false;
        selected.pop();
    }
}

dfs(0);
console.log(min);