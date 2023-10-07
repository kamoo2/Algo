let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N,M] = input[0].split(' ').map(Number);

let ans = '';
let selected = [];
function dfs(k,start){
    if(k === M+1){
        // complete code
        ans += selected.join(' ');
        ans += '\n';
        return;
    }

    for(let i=start;i<=N;i++){
        selected.push(i);
        dfs(k+1,i+1);
        selected.pop();
    }
}

dfs(1,1);

console.log(ans);