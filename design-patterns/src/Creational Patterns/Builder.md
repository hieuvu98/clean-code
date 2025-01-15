# Builder

## Giới thiệu

Builder Pattern là một mẫu thiết kế được dùng để cung cấp một giải pháp linh hoạt cho các vấn đề hkởi tạo đối tượng (object) khác nhau trong lập trình hướng đối tượng.

Builder Pattern tách rời quá trình xây dựng đối tượng phức tạp thành nhiều bước riêng biệt. Mỗi bước tập trung vào một khía cạnh của đối tượng.

Mục đích: Builder Pattern được sử dụng để tách rời quá trình khởi tạo đối tượng phức tạp khỏi các đại diện của nó, giúp đạt được những lợi ích sau:

- Tăng tính linh hoạt trong khởi tạo đối tượng phức tạp
- Dễ dàng thay đổi cách khởi tạo đối tượng.
- Hỗ trợ tạo nhiều biểu diễn khác nhau của đối tượng.
- Đơn giản hóa việc test và debug.

Builder Pattern được xây dựng để khắc phục một số nhược điểm của Factory Pattern và Abstract Factory Pattern khi mà object có nhiều thuộc tính. Có ba vấn đề chính với  Factory Pattern và Abstract Factory Pattern khi object có nhiều thuộc tính:
- Quá nhiều tham số phải truyền vào từ phía client tới Factory Class.
- Một số tham số có thể là tùy chọn nhưng trong Factory Pattern, chúng ta phải gửi tất cả - tham số, với tham số tùy chọn nếu không nhập gì thì sẽ truyền là null.
- Nếu một Object có quá nhiều thuộc tính thì việc tạo sẽ phức tạp.

## Đặt vấn đề

Hãy tưởng tượng một đối tượng phức tạp đòi hỏi nhiều công sức, khởi tạo từng bước của nhiều trường và các đối tượng lồng nhau. Code khởi tạo như vậy thường được đặt bên trong một hàm khởi tạo khổng lồ với rất nhiều tham số. Hoặc thậm chí tệ hơn: nằm rải rác trên toàn bộ client code.

Ví dụ một đối tượng House có thể bao gồm các thành phần như: phòng khách, phòng ngủ, nhà bếp, cửa ra vào, cửa sổ, hệ thống điện, nước. Nhưng nếu bạn muốn một ngôi nhà lớn hơn, sáng sủa hơn, có sân sau và các tiện ích khác (như hệ thống sưởi, hệ thống ống nước và hệ thống dây điện)?

Giải pháp đơn giản nhất là mở rộng lớp House và tạo một tập hợp các lớp con để bao gồm tất cả các tổ hợp của các tham số. Nhưng cuối cùng bạn sẽ có một số lượng đáng kể các lớp con. Bất kỳ thông số mới nào, chẳng hạn như kiểu hiên nhà, sẽ yêu cầu phát triển hệ thống phân cấp này nhiều hơn nữa.

## Giải pháp

Builder Pattern giúp giải quyết vấn đề của việc tạo ra đối tượng phức tạp, như ví dụ sau về việc xây dựng một ngôi nhà. Thay vì tạo ngôi nhà một cách trực tiếp từng phần, chúng ta chia quá trình này thành nhiều bước riêng biệt. Mỗi bước tập trung vào việc xây dựng một khía cạnh cụ thể của ngôi nhà, chẳng hạn như cửa, cửa sổ và nhà bếp.

### Cách hoạt động
