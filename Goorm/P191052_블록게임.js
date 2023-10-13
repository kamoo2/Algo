const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

const stack = [[0,0,1]];

const opers = input[1].split('');
const points = input[2].split(' ').map(Number);

for(let x=0;x<N;x++){
    let ny = stack[stack.length-1][0];
    let nx = stack[stack.length-1][1];

    if(opers[x] === 'R') nx+=1;
    else if(opers[x] === 'L') nx-=1;
    else if(opers[x] === 'U') ny-=1;
    else ny+=1;

    // 새로운 좌표가 빈 공간이라면 stack에 추가
    // 새로운 좌표에 이미 블록이 있다면 해당 블록까지 pop()을 이용해 블록 제거 후 현재 좌표에 블록 새로 추가

    let flag = false;
    const length = stack.length;
    for(let i=0;i<length;i++){
        if(flag){
            const arr = stack.pop();
            continue;
        }
        if(stack[i][0] === ny && stack[i][1] === nx){
            flag=true;
            continue;
        }
    }

    if(flag){
        // push는 안해도 되고 ans만 갱신
        const arr = stack.pop();
        stack.push([ny,nx,points[x]]);
    }else{
        stack.push([ny,nx,points[x]]);
    }
}

let ans = 0;
for(let i=0;i<stack.length;i++){
    ans+=stack[i][2];
}

console.log(ans);