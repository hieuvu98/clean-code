function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

function binarySearch() {
    
}
console.log(linearSearch([1,65,3,5,2,6], 6)); 