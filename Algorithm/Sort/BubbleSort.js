const bubbleSort = (originArr) => {
  const arr = [...originArr];
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const data = [6, 3, 9, 3, 2, 7, 6, 4, 1];

console.log(`Bubble Sort : ${bubbleSort(data)}`);
