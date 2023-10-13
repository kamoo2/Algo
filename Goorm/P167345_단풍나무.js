const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

let map = [];
let copy = [];
const dy = [1,0,-1,0];
const dx = [0,1,0,-1];

let total = 0;

for(let i=1;i<=N;i++){
    const line = input[i].split(' ').map(Number);
    total += line.reduce((cur,acc)=>acc+=cur,0);
    map.push(line.map(item=>item));
    copy.push(line.map(item=>item));
}
let ans = 0;
while(total > 0){
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(map[i][j] === 0)continue;

            let cnt = 0;

            for(let k=0;k<4;k++){
                const ny = i + dy[k];
                const nx = j + dx[k];

                if(ny < 0 || nx < 0 || ny >= N || nx >= N)continue;
                if(map[ny][nx] === 0)cnt++;
            }

            if(map[i][j] === cnt) {
                total -= cnt;
                copy[i][j] = 0;
            }else if(map[i][j] < cnt){
                total -= map[i][j];
                copy[i][j] = 0;
            }
            else {
                total -= cnt;
                copy[i][j] -= cnt;
            }
        }
    }
    map = copy.map(item => [...item]);
    ans++;
}

console.log(ans);