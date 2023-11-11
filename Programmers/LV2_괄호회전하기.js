function solution(s) {
  let len = s.length; // 문자열의 길이
  let arr = s.split(""); // 문자열을 문자로 쪼개기
  // shift : 맨 앞 뽑기
  // pop : 맨 뒤 뽑기
  // unshift : 맨 앞 넣기
  // push : 맨 뒤 넣기
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    let a = arr.shift();
    arr.push(a);
    // 왼쪽으로 회전한 문자 배열 완성
    if (isCorrect(arr)) {
      // 올바른 문자열인 경우
      cnt++;
    } else {
      // 올바르지 않은 문자열인 경우
      continue;
    }
  }
  return cnt;
}

function isCorrect(arr) {
  let stack = [];
  let flag = true;
  if (arr.length % 2 == 1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else {
      // stack에 열린게 있으면
      let leftWord = stack.pop(); // 마지막 아이템 하나 뽑고
      if (leftWord === "(" && arr[i] === ")") continue;
      if (leftWord === "[" && arr[i] === "]") continue;
      if (leftWord === "{" && arr[i] === "}") continue;
      flag = false;
      break;
    }
  }
  return flag;
}
