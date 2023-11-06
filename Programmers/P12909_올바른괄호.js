function solution(s) {
  const stack = [];

  // 첫 번째 괄호가 닫는 괄호이면 무조건 false
  if (s[0] === ")") return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      const data = stack.pop();

      if (data === ")") {
        // 닫는 괄호면 -> 뺀 데이터를 다시 stack.push 한다.
        stack.push(data);
      }
    }
  }

  return stack.length === 0 ? true : false;
}
