const fs =require('fs');
const input = fs .readFileSync('/dev/stdin').toString().split('\n');

const [N,K] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let result = 0;
let eraseCount = 0;

for(let start = 0,end =0;start < N;start++){
    while(end < N){
        if(arr[end] % 2 === 0)end++; // 짝수인 경우 end 증가
        else{ // 홀수인 경우
            if(eraseCount === K) break; // 더 지울 수 없다면 종료
            eraseCount++;
            end++;
        }
    }

    result = Math.max(result,end-start-eraseCount); // 범위의 길이 계산

    if(arr[start] % 2 === 1) eraseCount--; // start를 오른쪽으로 한칸 이동시킬 때, 지울 수 있다면 개수 감소
}

console.log(result);