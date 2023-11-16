// 첫번째값을 두번째 값부터 끝까지 비교하면서 최소값 찾고 첫번째에 위치 시킴
// 두번째 값을 세번째 값부터 비교해서 최소값 찾고 두번째에 위치 시킴
// 마지막까지 반복
// 선택정렬은 첫 번째 값을 두번째 값부터 끝까지 비교하면서 최소값 찾고 첫번째에 위치시키고
// 두번째 값을 세번째 값부터 마지막까지 비교하면서 최소값 찾고 두번째에 위치시키는 과정을 반복하면서 정렬하는 알고리즘 입니다.
// 시간 복잡도는 O(n^2)입니다.

function selectSort(originArr) {
  const arr = [...originArr];
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // 최소값을 찾기 위한 변수 min을 현재 인덱스로 초기화
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

const data = [6, 3, 9, 3, 2, 7, 6, 4, 1];

console.log(`Select Sort : ${selectSort(data)}`);
