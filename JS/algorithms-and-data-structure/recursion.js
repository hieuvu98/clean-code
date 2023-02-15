function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

function gcd(m, n) {
  let r;
  if (m < n) return gcd(n, m);
  r = m % n;
  if (r == 0) return n;
  return gcd(n, r);
}


console.log(fibonacci(6));