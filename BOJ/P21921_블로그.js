const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// N : 블로그 시작하고 지난 일수
// X : X일 동안

const [N,X] = input[0].split(' ').map(Number);

const arr = [0,...input[1].split(' ').map(Number)];

let sum = 0;

// 첫 번째 윈도우
for(let i=1;i<=N;i++){
    // 1부터 X번째 날의 방문자 수의 합
    if(i <=X) sum += arr[i];
}

let max = sum; // 가장 큰 합
let cnt = 1; // 기간의 개수

// 슬라이딩 윈도우 시작
let left = 1;
let right = X;

while(true){ // 윈도우를 한 칸 오른쪽으로 이동하기
    left++;
    right++;

    if(right > N)break;

    sum = sum + arr[right] - arr[left-1];
    if(max === sum) cnt++; // 같으면 같은 기간 개수 증가
    else if(max < sum){ // 더 크면 max 갱신 하고 기간 초기화
        max = sum;
        cnt = 1;
    }
}

if(max === 0) console.log('SAD');
else{
    console.log(max);
    console.log(cnt);
}