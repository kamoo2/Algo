let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N,M] = input[0].split(' ').map(Number);

let homes = [];
let chickens = [];
let selected = [];
let ans = Number.MAX_VALUE;

for(let i=1;i<=N;i++){
    let line = input[i].split(' ').map(Number);

    for(let j=0;j<N;j++){
        if(line[j] === 2){
            // 치킨집
            chickens.push([i,j+1]);
        }else if(line[j] === 1){
            // 집
            homes.push([i,j+1]);
        }
    }
}

function rec_func(depth,start){
    if(depth === M+1){
        // 치킨집 M개 골랐다면
        // 1. for문으로 homes 배열을 돈다
        let sum = 0;
        for(let i=0;i<homes.length;i++){
            let hx = homes[i][0];
            let hy = homes[i][1];
            let hMin = Number.MAX_VALUE;
            for(let j=0;j<M;j++){
                let cx = selected[j][0];
                let cy = selected[j][1];

                let dist = Math.abs(hx-cx) + Math.abs(hy-cy);
                hMin = Math.min(hMin,dist);
            }
            sum += hMin;
        }
        ans = Math.min(ans,sum);
        return;
    }

    // 치킨집 중에서 M개를 고르자
    for(let i=start;i<chickens.length;i++){
        selected.push(chickens[i]);
        rec_func(depth+1,i+1);
        selected.pop();
    }
}

rec_func(1,0);

console.log(ans);
