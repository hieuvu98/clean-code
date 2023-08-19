function swap(arr, xp, yp) {
  console.log(arr, xp, yp);
  [arr[xp], arr[yp]] = [arr[yp], arr[xp]];
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let noSwap = true;
    // Last i elements are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function selectionSort(arr) {
  let indexMin;
  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }
  }
}

bubbleSort([6, 7, 8, 9, 1, 2, 3, 4, 5]);
