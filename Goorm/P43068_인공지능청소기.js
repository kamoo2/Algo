const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);

for(let t = 1;t<=T;t++){
    // N : 몇 초후에 도착해야하는지
    // X,Y : (X,Y)좌표

    const [X,Y,N] = input[t].split(' ').map(Number);

    // 1. |X| + |Y| === N -> YES
    // 2. |X| + |Y| > N -> NO
    // 3. |X| + |Y| < N && N - (|X| + |Y|) % 2 === 0 -> YES

    const sum = Math.abs(X) + Math.abs(Y);

    if(sum === N)console.log('YES');
    else if(sum > N)console.log('NO');
    else{
        if((N - sum) % 2 === 0)console.log('YES');
        else console.log('NO');
    }
}