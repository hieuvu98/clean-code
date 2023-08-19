function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

function binarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1;
  let mid;
  do {
    mid = parseInt((left + right) / 2);
    if (x === arr[mid]) return mid;
    else if (x < arr[mid]) right = mid - 1;
    else left = mid + 1;
  } while (left <= right);
  return -1;
}

function binarySearchRecursion(arr, x, left, right) {
  if (left > right) return -1;
  let mid = parseInt((left + right) / 2);
  if (x === arr[mid]) return mid;
  if (x < arr[mid]) return binarySearchRecursion(arr, x, left, mid - 1);
  else return binarySearchRecursion(arr, x, mid + 1, right);
}

console.log(binarySearchRecursion([1, 2, 3, 5, 6, 9, 10], 6, 0, 5));
