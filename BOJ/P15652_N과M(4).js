let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N,M] = input[0].split(' ').map(Number);

let ans = '';
let selected = [];

function dfs(depth,start){
    if(depth === M+1){
        ans += selected.join(' ');
        ans += '\n';
        return;
    }

    for(let a = start;a<=N;a++){
        selected.push(a);
        dfs(depth+1,a);
        selected.pop();
    }
}

dfs(1,1);
console.log(ans);