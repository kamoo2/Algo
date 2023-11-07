// 탈락하지 않는 경우는 [0,0] 출력
// 탈락 하는 경우
// 1. 이전에 등장했던 단어는 사용 불가
// 2. 한 글자인 단어 인정 x
// 3. 끝말을 잇지 않은 경우 x
function solution(n, words) {
  let answer = [0, 0];

  // 나온 단어를 담는 set
  const history = new Set();
  history.add(words[0]);

  let idx = 2;

  let round = 1;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const beforeWord = words[i - 1];
    if (idx > n) {
      idx %= n;
      round++;
    }
    if (history.has(word)) {
      // 있으면 탈락
      answer = [idx, round];
      break;
    } else if (word[0] !== beforeWord[beforeWord.length - 1]) {
      // 끝 단어와 첫단어 비교 시 다른 경우
      answer = [idx, round];
      break;
    } else {
      history.add(word);
    }
    idx++;
  }

  return answer;
}
