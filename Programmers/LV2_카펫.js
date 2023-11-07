function solution(brown, yellow) {
  for (let y = 3; y <= (brown + yellow) / y; y++) {
    let x = (brown + yellow) / y;
    // 만약 x가 정수이고, 테두리 부분을 제외한 중앙 부분(노란색 부분)이 조건을 만족한다면
    if (Number.isInteger(x) && (x - 2) * (y - 2) === yellow) {
      return [x, y];
    }
  }
}
