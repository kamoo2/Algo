let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let N;
let arr;
let selected;

for(let t=1;t<=T;t++){ // 테스트케이스 만큼 반복
    N = Number(input[t]);
    arr = Array(N).fill(0).map((_,index)=>index+1);
    selected = [];
    dfs(1);
    console.log();
}


function dfs(k){
    if(k === N){ // N-1개의 연산자를 모두 선택한 경우
        // complete code
        let str ='';
        for(let i =0;i<N-1;i++) str += arr[i] + selected[i];
        str += arr[N-1] + "";
        const result = eval(str.split(" ").join(""));
        if(result === 0)console.log(str);
        return;
    }

    for(let x of [" ", "+","-"]){
        selected.push(x);
        dfs(k+1);
        selected.pop();
    }
}