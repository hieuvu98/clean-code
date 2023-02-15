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
function printArr(arr, n){
  for(let i = 0; i < n; i++)
    console.log(arr[i]);
}

function sort(arr, n, i) {
	let j, swap;
	printArr(arr, n);
	for(j = i + 1; j < n; j++) {
		if(arr[i] > arr[j]) {
			swap = arr[i];
			arr[i] = arr[j];
			arr[j] = swap;
		}
		sort(arr, n, i + 1);
	}
}

console.log(fibonacci(6));