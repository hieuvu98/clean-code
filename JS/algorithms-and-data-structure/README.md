## Advanced working with functions

### Call Stack Và Đệ Quy
#### Call Stack
#### Tail call optimization
#### Đệ Quy

Ta có một hàm pow(x, n) tăng x lên với n. Nói cách khác, nhân x lên với n lần.

```html
pow(2, 2) = 4 pow(2, 3) = 8 pow(2, 4) = 16
```

- Suy nghĩ lặp lại: vòng lặp for:

```js
function pow(x, n) {
  let result = 1;
  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8
```

- Tư duy đệ quy: đơn giản hóa nhiệm vụ và tự gọi:

```js
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8
```

- Khi pow(x, n)được gọi, thực thi chia thành hai nhánh:

```html
if n==1 = x / pow(x, n) = \ else = x * pow(x, n - 1)
```

- HELPER METHOD RECURSION:

```js
function outer(input) {
  let outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
```

## Searching Algorithms
### Linear Search - Tìm kiếm tuyến tính (Tìm kiếm tuần tự)
- là một phương pháp tìm kiếm một giá trị có trong danh sách. Nó tuần tự kiểm tra từng phần tử trong danh sách cho đến khi nó tìm ra một hay nhiều giá trị mục tiêu.
- Là một giải thuật đơn giản khi hiện thực và khá hiệu quả với danh sách đủ nhỏ hoặc một danh sách chưa được sắp xếp.
- Độ phức tạp O(n).
- Array methods: indexOf, includes, find, findIndex,...

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/8ce0e58ed3dafbed1101669bf3caa64326bef0b9/images/linear-search-algorithm.gif?token=GHSAT0AAAAAAB6JS3AGLP4WPRGRAWUOXEJMY7EZO2Q)

### Binary Search - Tìm kiếm nhị phân