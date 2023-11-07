function solution(k, tangerine) {
  let removeCount = tangerine.length - k; // 제거 해야할 귤의 수

  const map = new Map(); // key : 귤의 사이즈 , value : 빈도수

  for (let i = 0; i < tangerine.length; i++) {
    if (map.has(tangerine[i])) {
      map.set(tangerine[i], map.get(tangerine[i]) + 1);
    } else {
      map.set(tangerine[i], 1);
    }
  }
  const sorted = [...map].sort((a, b) => b[1] - a[1]); // 정렬하기 위해 배열로 변환 후 내림차순 정렬

  let answer = sorted.length; // 귤 사이즈의 최대 종류 수

  for (let i = sorted.length - 1; i >= 0; i--) {
    // 빈도수가 가장 작은 사이즈의 귤부터 제거
    const [_, cnt] = sorted[i];

    if (removeCount > cnt) {
      removeCount -= cnt;
      answer--;
    } else if (removeCount < cnt) {
      break;
    } else {
      answer--;
      break;
    }
  }
  return answer;
}
