# OOP (Object-Oriented Programming)

## Tổng quan

- Lập trình hướng đối tượng (object-oriented programming) là một phương pháp thiết kế và phát triển phần mềm. OOP là phương thức tư duy mới để giải quyết vấn đề bằng máy tính. Để đạt kết quả, lập trình viên phải nắn vấn đề thành một thực thể quen thuộc với máy tính. Cách tiếp cận hướng đối tượng cung cấp một giải pháp toàn vẹn để giải quyết vấn.

- Đối với một ngôn ngữ lập trình hỗ trợ OOP thì việc triển khai kỹ thuật lập trình hướng đối tượng sẽ dễ dàng hơn. Kỹ thuật lập trình hướng đối tượng cải tiến việc phát triển các hệ thống phần mềm. Kỹ thuật ấy đề cao nhân tố chức năng (fucntionality) và các mối quan hệ dữ liệu.

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/oop-la-gi.jpg)

- Trong mô hình OOP, mỗi object là một thực thể riêng biệt gồm những attribute (thuộc tính) và method (phương thức). Class thì giống như cái khuôn để “đúc” ra object và cũng có hai thành phần là attribute và method. Attribute chính là các thông tin của object còn method là những hành động mà object có thể thực hiện.

## Các đặc điểm cơ bản của lập trình hướng đối tượng

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/procedural-programming-vs-object-oriented-programming.png)

### Tính trừu tượng(Abstraction)

- Là một cơ chế cho phép biểu diễn một tình huống phức tạp trong thế giới thực bằng một mô hình được đơn giản hóa. Nó bao gồm việc tập trung vào các tính chất quan trọng của một đối tượng khi phải làm việc với lượng lớn thông tin. Quá trình trừu tượng hóa dữ liệu giúp ta xác định được những thuộc tính, hành động nào của đối tượng cần thiết sử dụng cho chương trình.
- Trừu tượng hóa là một trong những công cụ cơ bản của tất cả các phương pháp lập trình, không chỉ lập trình hướng đối tượng. Khi viết một chương trình giải một bài toán của thế giới thực, trừu tượng hóa là một cách để mô hình hóa bài toán đó.

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/L9iXI.png)

### Tính đóng gói dữ liệu (Encapsulation)

- Tính đóng gói là tiến trình che giấu việc thực thi những chi tiết của một đối tượng đối với người sử dụng đối tượng ấy. Tính chất này không cho phép người dùng trực tiếp tác động đến dữ liệu bên trong đối tượng mà phải thông qua các phương thức mà đối tượng cung cấp. Tính chất này đảm bảo tính toàn vẹn của đối tượng.

### Tính kế thừa (Inheritance)

- Tính thừa kế cho phép một lớp chia sẻ các thuộc tính và các phương
  thức được định nghĩa trong một hoặc nhiều lớp khác.
- Lớp thừa hưởng từ một lớp khác được gọi là subclass (lớp con)

### Tính đa hình (Polymorphism)

- Tính đa hình cho phép một phương thức có các tác động khác nhau trên nhiều loại đối
  tượng khác nhau
- Với tính đa hình, nếu cùng một phương thức ứng dụng cho các đối tượng thuộc các lớp
  khác nhau thì nó đưa đến những kết quả khác nhau. Bản chất của sự việc chính là phương thức này bao gồm cùng một số lượng các tham số

### Ưu điểm của lập trình hướng đối tượng

- Mô hình hóa được các thứ phức tạo dưới dạng những cấu trúc đơn giản.
- Sở hữu tính bảo mật cao, nó có khả năng bảo vệ các thông tin thông qua việc đóng gói.
- Giảm thiểu các lỗi và những vấn đề liên quan đến việc bảo trì ứng dụng do khả năng tái sử dụng các đối tượng.
- Tăng tốc tiến trình thiết kế và phát triển, tiết kiệm được tài nguyên cho các lập trình viên. Giúp tối ưu và tái sử dụng code một cách hiệu quả.
- Sự xuất hiện của 2 khái niệm mới là lớp và đối tượng chính là đặc trưng của phương pháp lập trình hướng đối tượng. Nó đã giải quyết được các khuyết điểm của phương pháp lập trình hướng cấu trúc để lại. Ngoài ra, các khái niệm này đã giúp biểu diễn tốt hơn thế giới thực trên máy tính.

### Nhược điểm của lập trình hướng đối tượng

- Khá phức tạp, đòi hỏi khá nhiều tư duy. Phương pháp này phức tạp vì phần mềm phải dựa trên sự tương tác của đối tượng. Do đó, lập trình viên cần phải hiểu bản chất của những khái niệm cơ bản như: lớp, đối tượng, phương thức, thuộc tính. Đồng thời, ta cũng cần nắm được bốn tính chất cơ bản của lập trình hướng đối tượng. Đó là: Tính trừu tượng (Abstraction), Tính đóng gói (Encapsulation), Tính kế thừa (Inheritance) và Tính đa hình (Polymorphism).
- Chương trình chậm và có kích thước lớn hơn
- Thực tế, có những vấn đề mặc định sẽ được giải quyết tốt hơn nếu lập trình viên sử dụng phương pháp lập trình chức năng (Functional Programming), lập trình logic, hoặc lập trình thủ tục. Nếu ta áp dụng lập trình hướng đối tượng, có thể sẽ không đem lại hiệu quả tốt.
