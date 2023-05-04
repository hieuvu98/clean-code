## Stack và Heap

> run time: là thời điểm chương trình đang chạy

> compile time: là thời điểm source code đang được compile

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

- Đệ quy lồng là loại đệ quy gọi đối số của nó là một đệ quy. Hiểu đơn giản là tham số truyền vào của hàm đệ quy là một đệ quy.

##### Đệ tương hỗ (Mutual Recursion)

- Đệ quy tương hỗ là loại đệ quy không gọi đệ quy trực tiếp chính nó, mà gọi một hàm khác. Trong hàm khác lại gọi lại nó. Ví dụ chúng ta có hàm A() gọi đệ quy hàm B() và trong hàm B() gọi lại đệ quy hàm A().

## Thuật toán tìm kiếm

### Linear Search - Tìm kiếm tuyến tính (Tìm kiếm tuần tự)

- là một phương pháp tìm kiếm một giá trị có trong danh sách. Nó tuần tự kiểm tra từng phần tử trong danh sách cho đến khi nó tìm ra một hay nhiều giá trị mục tiêu.
- Là một giải thuật đơn giản khi hiện thực và khá hiệu quả với danh sách đủ nhỏ hoặc một danh sách chưa được sắp xếp.
- Độ phức tạp O(n).
- Array methods: indexOf, includes, find, findIndex,...

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/8ce0e58ed3dafbed1101669bf3caa64326bef0b9/images/linear-search-algorithm.gif)

### Binary Search - Tìm kiếm nhị phân

- là một giải thuật tìm kiếm nhanh với độ phức tạp thời gian chạy là Ο(log n). Giải thuật tìm kiếm nhị phân làm việc dựa trên nguyên tắc chia để trị (Divide and Conquer).
- Thụât toán tìm kiếm nhị phân thực hiện tìm kiếm một mảng đã sắp xếp bằng cách liên tục chia các khoảng tìm kiếm thành 1 nửa. Bắt đầu với một khoảng từ phần tử đầu mảng, tới cuối mảng. Nếu giá trị của phần tử cần tìm nhỏ hơn giá trị của phần từ nằm ở giữa khoảng thì thu hẹp phạm vi tìm kiếm từ đầu mảng tới giửa mảng và nguợc lại. Cứ thế tiếp tục chia phạm vi thành các nửa cho dến khi tìm thấy hoặc đã duyệt hết.
- Thuật toán tìm kiếm nhị phân tỏ ra tối ưu hơn so với tìm kiếm tuyết tính ở các mảng có độ dài lớn và đã được sắp xếp. Ngược lại, tìm kiếm tuyến tính sẽ tỏ ra hiệu quả hơn khi triển khai trên các mảng nhỏ và chưa được sắp xếp.
- Tìm kiếm nhị phân trong mảng:

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/binary-and-linear-search-animations.gif)

- Tìm kiếm trong cây nhị phân:

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/binary-search-tree-sorted-array-animation.gif)

- Chèn phần tử vào cây nhị phân:

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/binary-search-tree-insertion-animation.gif)

## Thuật toán sắp xếp

### Sắp xếp nổi bọt - Bubble Sort

- Thuật toán sắp xếp bubble sort thực hiện sắp xếp dãy số bằng cách lặp lại công việc đổi chỗ 2 số liên tiếp nhau nếu chúng đứng sai thứ tự(số sau bé hơn số trước với trường hợp sắp xếp tăng dần) cho đến khi dãy số được sắp xếp.
- Giải thuật sắp xếp nổi bọt là giải thuật chậm nhất trong số các giải thuật sắp xếp cơ bản. Giải thuật này còn chậm hơn giải thuật đổi chỗ trực tiếp mặc dù số lần so sánh bằng nhau, nhưng do đổi chỗ hai phần tử kề nhau nên số lần đổi chỗ nhiều hơn.
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(n)
  - Trung bình: O(n^2)
  - Trường hợp xấu: O(n^2)

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/bubble-sort-visualization.gif)

### Sắp xếp chọn - Selection Sort

- Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu.
- Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp.
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(n^2)
  - Trung bình: O(n^2)
  - Trường hợp xấu: O(n^2)

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/selection-soft-gif.gif)

### Sắp xếp chèn - Insertion Sort

- Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu.
- Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp.
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(n^2)
  - Trung bình: O(n^2)
  - Trường hợp xấu: O(n^2)

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/insertion-sort-gif.gif)

### Sắp xếp trộn - Merge Sort

### Sắp xếp nhanh - Quick Sort

### Radix Sort

## Danh sách liên kết đơn

- Danh sách liên kết đơn là một tập hợp các Node được phân bố động, được sắp xếp theo cách sao cho mỗi Node chứa một giá trị (Data) và một con trỏ (Next). Con trỏ sẽ trỏ đến phần tử kế tiếp của danh sách liên kết đó. Nếu con trỏ mà trỏ tới NULL, nghĩa là đó là phần tử cuối cùng của linked list.

| So sánh             | Array                                                                   | Linked List                                                                                       |
| ------------------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| Kích thước          | Kích thước cố định <br> Khai báo kích thước trước khi sử dụng           | Kích thước thay đổi trong quá trình thêm/ xóa phần tử <br> Kích thước tối đa phụ thuộc vào bộ nhớ |
| Lưu trữ             |                                                                         | Kích thước thay đổi trong quá trình thêm/ xóa phần tử <br> Kích thước tối đa phụ thuộc vào bộ nhớ |
| Cấp phát bộ nhớ     | Tĩnh: Bộ nhớ được cấp phát trong quá trình biên dịch                    | Động: Bộ nhớ được cấp phát trong quá trình chạy                                                   |
| Bộ nhớ              | Cần ít                                                                  | Cần nhiều                                                                                         |
| Sử dụng bộ nhớ      | Không hiệu quả                                                          | Hiệu quả                                                                                          |
| Thứ tự và sắp xếp   | Được lưu trữ trên một dãy ô nhớ liên tục                                | Được lưu trữ trên các ô nhớ ngẫu nhiên                                                            |
| Cách truy cập       | Truy cập tới phần tử ngẫu nhiên trực tiếp bằng cách sử dụng chỉ số mảng | Truy cập một cách tuần tự                                                                         |
| Tìm kiếm            | Tìm kiếm tuyến tính hoặc tìm kiếm nhị phân                              | Chỉ có thể tìm kiếm tuyến tính                                                                    |
| Chèn và xoá phần tử | Tương đối chậm                                                          | Nhanh                                                                                             |

## Danh sách liên kết đôi

## Ngăn xếp - Stack

## Hàng đợi - Queue

## Cây nhị phân - Binary Tree

## Heap

## Hash Table

## Graph
