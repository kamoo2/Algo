let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let selected = [];
let operations = [];
let visited = Array(N).fill(false);
let max ='';
let min ='';

for(let a of input[1].split(' ')){
    operations.push(a);
}

function dfs(depth){
    if(depth === N+1){
        // complete code

        max = '';
        for(let x of selected)max += x+'';
        if(min === '') min = max;
        return;
    }

    for(let i=0;i<10;i++){
        if(visited[i])continue;
        if(depth === 0){
            visited[i]=true;
            selected.push(i);
        }else{
            // 연산자에 맞는 경우에만 push
            let possible = operations[depth-1] === '>' ? selected[depth-1] > i : selected[depth-1] < i;
            if(!possible)continue;
            visited[i]=true;
            selected.push(i);
        }
        dfs(depth+1);
        visited[i]=false;
        selected.pop();
    }
}

dfs(0);

console.log(max + '\n' + min)