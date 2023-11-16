// 삽입 정렬
// 시간복잡도 -> W : O(n^2) B : O(n)
// 삽입 정렬은 두번째 값부터 시작해서 왼쪽 요소들과 비교하면서 정렬해 나가는 알고리즘 입니다.
// 그래서 현재 비교해야할 값의 왼쪽은 다 정렬이 된 상태라는 점이 특징입니다.
// 시간 복잡도는 O(n^2)입니다.

function insertSort(originArr) {
  const arr = [...originArr];
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const cur = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[left] > cur) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = cur;
  }
  return arr;
}

const data = [6, 3, 9, 3, 2, 7, 6, 4, 1];

console.log(`Insert Sort : ${insertSort(data)}`);
