// Đệ quy nhị phân
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Đệ quy đuôi
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
// Đệ quy tuyến tính
function gcd(m, n) {
  let r;
  if (m < n) return gcd(n, m);
  r = m % n;
  if (r == 0) return n;
  return gcd(n, r);
}

// Đệ quy đa tuyến
function printArr(arr, n) {
  for (let i = 0; i < n; i++) console.log(arr[i]);
}

function sort(arr, n, i) {
  let j, swap;
  printArr(arr, n);
  for (j = i + 1; j < n; j++) {
    if (arr[i] > arr[j]) {
      swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
    }
    sort(arr, n, i + 1);
  }
}

// đệ quy lồng
function ackerman(m, n) {
  if (m == 0) return 1;
  else if (n == 0) return ackerman(m - 1, 1);
  else return ackerman(m - 1, ackerman(m, n - 1));
}
// đệ quy tương hỗ
function isEven(n) {
  if (n == 0) return true;
  return isOdd(n - 1);
}
function isOdd(n) {
  return !isEven(n);
}
// ========== Example ========== //
// Ex1: chuyển đổi cơ số 10 về cơ số 2
function convertH10ToH2(n) {
  if (n > 0) {
    let sd = n % 2;
    n = parseInt(n / 2);
    convertH10ToH2(n);
    console.log(sd);
  }
}

// Ex2

