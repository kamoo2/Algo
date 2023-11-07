function solution(n) {
  let answer = 0;

  const oneCount = getOneCount(n);

  while (true) {
    n++;
    const oneCount2 = getOneCount(n);
    if (oneCount === oneCount2) {
      answer = n;
      break;
    }
  }

  return answer;
}

function getOneCount(n) {
  return n
    .toString(2)
    .split("")
    .filter((num) => num === "1").length;
}
