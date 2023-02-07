## Advanced working with functions
### Call Stack And Recursion
1. Call Stack
2. Recursive Function
For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

```html
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
```
- Iterative thinking: the for loop:
```js
function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8
```

- Recursive thinking: simplify the task and call self:
```js
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8
```
- When pow(x, n) is called, the execution splits into two branches:
```html
              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
```