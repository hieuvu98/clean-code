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

bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);
