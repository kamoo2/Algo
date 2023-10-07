let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let ans = '';
let LIMIT = 6;
let selected;
let arr;

for(let t=0;;t++){
    let line = input[t].split(' ').map(Number);
    let N = line[0];
    if(N === 0)break;

    arr = [];
    selected = [];
    for(let i=1;i<=N;i++){
        arr.push(line[i]);
    }

    dfs(N,1,0);
    ans+='\n';
}

function dfs(N,depth,start){
    if(depth === LIMIT+1){
        // complete code
        for(let i=0;i<LIMIT;i++){
            ans+= selected[i] + ' ';
        }
        ans+='\n';
        return;
    }

    for(let a = start;a<N;a++){
        selected.push(arr[a]);
        dfs(N,depth+1,a+1);
        selected.pop();
    }
}

console.log(ans);
