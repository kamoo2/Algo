function quickSort(originArr) {
  const arr = [...originArr];
  let len = arr.length;

  if (len <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);

  return [...lSorted, pivot, ...rSorted];
}

const data = [6, 3, 9, 3, 2, 7, 6, 4, 1];

console.log(`Select Sort : ${quickSort(data)}`);
