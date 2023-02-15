## Advanced working with functions

### Stack Và Đệ Quy
#### Stack
- Stack là một cấu trúc dữ liệu trừu tượng. Nó là một danh sách được sắp xếp trong đó các phần tử được thêm vào hoặc xóa đi chỉ ở một đầu của danh sách, được gọi là đỉnh của ngăn xếp (TOS). Vì tất cả việc xóa và chèn trong ngăn xếp được thực hiện từ đầu ngăn xếp, phần tử cuối cùng được thêm vào sẽ là phần tử đầu tiên được xóa khỏi ngăn xếp
- Hoạt động theo cơ chế LIFO
#### Tail call optimization
#### Đệ Quy
##### Đệ quy tuyến tính (Linear Recursion)
- Độ phức tạp O(n)
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
```js
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
##### Đệ quy đa tuyến (Exponential Recursion)
- Một hàm được gọi là đệ quy đa tuyến nếu mỗi lần gọi đệ quy nó phát sinh ra khoảng n lần gọi đệ quy khác. Thông thường câu lệnh gọi đệ quy được đặt trong các vòng lặp.
- Độ phức tạp O(a^n)
##### Đệ quy lồng (Nested Recursion)
## Searching Algorithms
### Linear Search - Tìm kiếm tuyến tính (Tìm kiếm tuần tự)
- là một phương pháp tìm kiếm một giá trị có trong danh sách. Nó tuần tự kiểm tra từng phần tử trong danh sách cho đến khi nó tìm ra một hay nhiều giá trị mục tiêu.
- Là một giải thuật đơn giản khi hiện thực và khá hiệu quả với danh sách đủ nhỏ hoặc một danh sách chưa được sắp xếp.
- Độ phức tạp O(n).
- Array methods: indexOf, includes, find, findIndex,...

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/8ce0e58ed3dafbed1101669bf3caa64326bef0b9/images/linear-search-algorithm.gif?token=GHSAT0AAAAAAB6JS3AGLP4WPRGRAWUOXEJMY7EZO2Q)

### Binary Search - Tìm kiếm nhị phân