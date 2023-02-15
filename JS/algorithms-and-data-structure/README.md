## Advanced working with functions

### Stack Và Đệ Quy
#### Stack
- Stack là một cấu trúc dữ liệu trừu tượng. Nó là một danh sách được sắp xếp trong đó các phần tử được thêm vào hoặc xóa đi chỉ ở một đầu của danh sách, được gọi là đỉnh của ngăn xếp (TOS). Vì tất cả việc xóa và chèn trong ngăn xếp được thực hiện từ đầu ngăn xếp, phần tử cuối cùng được thêm vào sẽ là phần tử đầu tiên được xóa khỏi ngăn xếp
- Hoạt động theo cơ chế LIFO
#### Tail call optimization
#### Đệ Quy
##### Đệ quy tuyến tính (Linear Recursion)
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
##### Đệ quy đuôi (Tail Recursion)
- Đệ quy đuôi là một trường hợp đặc biệt của đệ quy tuyến tính
- Hàm thực hiện gọi đệ quy ở sau cùng.
```c++
  int gcd(int m, int n) {
    int r;
    if( m < n) return gcd(n, m);
    r = m % n;
    if(r == 0) return (n);
    return gcd(n, r);
  }
```
##### Đệ quy nhị phân (Binary Recursion)
- Là dạng đệ quy gọi hai lần chính nó. Hiểu đơn giản là trong một hàm đệ quy, mà có dòng lệnh gọi chính hàm đó hai lần.
##### Đệ quy đa tuyến (Exponential Recursion)
## Searching Algorithms
### Linear Search - Tìm kiếm tuyến tính (Tìm kiếm tuần tự)
- là một phương pháp tìm kiếm một giá trị có trong danh sách. Nó tuần tự kiểm tra từng phần tử trong danh sách cho đến khi nó tìm ra một hay nhiều giá trị mục tiêu.
- Là một giải thuật đơn giản khi hiện thực và khá hiệu quả với danh sách đủ nhỏ hoặc một danh sách chưa được sắp xếp.
- Độ phức tạp O(n).
- Array methods: indexOf, includes, find, findIndex,...

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/8ce0e58ed3dafbed1101669bf3caa64326bef0b9/images/linear-search-algorithm.gif?token=GHSAT0AAAAAAB6JS3AGLP4WPRGRAWUOXEJMY7EZO2Q)

### Binary Search - Tìm kiếm nhị phân