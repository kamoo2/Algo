function solution(n) {
  let answer = 0;

  const nums = new Array(n + 1).fill(0).map((_, idx) => idx);

  let idx = n;

  while (idx >= 1) {
    let sum = 0;
    for (let i = idx; i >= 1; i--) {
      sum += nums[i];
      if (sum === n) {
        answer++;
      }
      if (sum > n) break;
    }
    idx--;
  }
  return answer;
}
