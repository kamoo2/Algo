let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N,M] = input[0].split(' ').map(Number);

let selected = [];
let ans = '';
function dfs(depth){
    if(depth === M+1){
        ans += selected.join(' ');
        ans += '\n';
        return;
    }

    for(let i=1;i<=N;i++){
        selected.push(i);
        dfs(depth+1);
        selected.pop();
    }
}

dfs(1);
console.log(ans);