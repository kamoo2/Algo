function solution(n) {
  var answer = 0;
  return fibonachi(n) % 1234567;
}

function fibonachi(n) {
  const arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    if (arr[i] > 1234567) {
      arr[i] %= 1234567;
    }
  }
  return arr[n];
}
