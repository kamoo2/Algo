const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);

let line = 1;
let ans = '';

for(let i=0;i<T;i++){
    const A = input[line].split(' ').map(Number);
    const B = input[line+1].split(' ').map(Number);
    const arrA = new Array(5).fill(0);
    const arrB = new Array(5).fill(0);

    for(let i=1;i<A.length;i++){
        arrA[A[i]]+=1;
    }
    for(let i=1;i<B.length;i++){
        arrB[B[i]]+=1;
    }

    getResult(arrA,arrB);
    line+=2;
}

console.log(ans);

function getResult(arrA,arrB){
    if(arrA[4] > arrB[4]) ans+='A\n';
    else if(arrA[4] < arrB[4]) ans+='B\n';
    else{
        // 같다면 3번 비교
        if(arrA[3] > arrB[3]) ans+='A\n';
        else if(arrA[3] < arrB[3]) ans+='B\n';
        else{
            // 같다면 2번 비교
            if(arrA[2] > arrB[2]) ans+='A\n';
            else if(arrA[2] < arrB[2]) ans+='B\n';
            else{
                // 같다면 1번 비교
                if(arrA[1] > arrB[1]) ans+='A\n';
                else if(arrA[1] < arrB[1]) ans+='B\n';
                else return ans+='D\n';
            }
        }
    }
}