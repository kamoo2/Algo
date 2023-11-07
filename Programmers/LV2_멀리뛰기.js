function solution(n) {
  const dp = [];
  const limit = 1234567;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % limit;
  }

  return dp[n];
}
