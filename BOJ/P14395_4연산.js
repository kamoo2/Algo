const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// S , T
// S를 T로 바꾸는 방법을 출력 , S와T가 같으면 0, 바꿀 수 없으면 -1, 가능한 방법이 여러 가지라면 사전순으로 앞서는 것을 출력, 아스키 코드 순서 * , + , - , /

const [S,T] = input[0].split(' ').map(Number);

function bfs(){
    const queue = [];
    queue.push([S,'']);
    const visited = new Set([S]);
    let found = false;

    if(S === T){
        console.log(0);
        process.exit();
    }

    while(queue.length!==0){
        let [value,opers] = queue.shift();

        if(value > Number.MAX_VALUE)continue;
        if(value === T){
            console.log(opers);
            found = true;
            break;
        }
        for(let oper of ['*','+','-','/']){
            let nextValue = value;
            if(oper === '*') nextValue *= value;
            if(oper === '+') nextValue += value;
            if(oper === '-') nextValue -= value;
            if(oper === '/' && value !== 0) nextValue /= value;
            if(!visited.has(nextValue)){ // 최단 거리로 갔을 경우에 기록되어야 하기 때문에 방문 체크 조건을 걸어준다.
                queue.push([nextValue,opers+oper]);
                visited.add(nextValue);
            }
        }
    }
    if(!found)console.log(-1);
}

bfs();

