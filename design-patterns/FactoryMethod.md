# Factory Method

## Giới thiệu

Factory method là design pattern khởi tạo cung cấp interface để khởi tạo các đối tượng (object) ở superclass, nhưng cho phép class con (subclasses) thay đổi kiểu của object sẽ được tạo ra. Factory Method Pattern dựa trên việc sử dụng một phương thức trừu tượng (thường được gọi là "factory method") trong một lớp trừu tượng (thường được gọi là "Creator"). Các lớp con của Creator sẽ triển khai factory method này để tạo ra các đối tượng cụ thể của lớp. Điều này cho phép linh hoạt trong việc tạo đối tượng mà không cần biết chính xác kiểu cụ thể của đối tượng.

Được sử dụng với mục đích:

- Tạo ra một cách khởi tạo object mới thông qua một interface chung
- Che giấu quá trình xử lý logic của phương thức khởi tạo
- Giảm sự phụ thuộc, dễ dàng mở rộng
- Giảm khả năng gây lỗi compilerộng

## Đặt vấn đề

Hãy tưởng tượng bạn đang tạo một ứng dụng liên quan tới giao vận (logistics management application). Phiên bản đầu tiên của ứng dụng của bạn chỉ có thể xử lý việc vận chuyển bằng xe tải, vì vậy phần lớn mã của bạn nằm trong class Truck.

Sau một thời gian, ứng dụng của bạn sẽ trở nên khá phổ biến. Mỗi ngày bạn nhận được hàng chục yêu cầu từ các công ty vận tải biển về việc đưa dịch vụ logistics đường biển, đường hàng không,... vào ứng dụng.

Tin tuyệt vời, phải không? Nhưng còn code thì sao? Hiện tại, hầu hết code của bạn đã được ghép nối với class Truck. Việc thêm các phương tiện khác như: Plane, Ships, ... vào ứng dụng sẽ yêu cầu thực hiện các thay đổi đối với toàn bộ code base.
Kết quả là, bạn sẽ nhận được một đoạn code khá khó chịu, chứa đầy các điều kiện chuyển đổi hành vi của ứng dụng tùy thuộc vào loại đối tượng vận chuyển.

## Giải pháp
Factory Method Pattern đề xuất bạn thay thế việc tạo đối tượng trực tiếp bằng cách gọi đến một phương thức factory đặc biệt. Đừng lo lắng: các đối tượng vẫn được tạo ra bằng toán tử new, nhưng điều này được thực hiện từ bên trong phương thức factory. Các đối tượng được trả về bởi một phương thức factory thường được gọi là sản phẩm (products).

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/8ce0e58ed3dafbed1101669bf3caa64326bef0b9/images/solution1.png.gif)

Ở cái nhìn đầu tiên, thay đổi này có vẻ không có ý nghĩa: chúng ta chỉ di chuyển cuộc gọi hàm khởi tạo từ một phần của chương trình sang phần khác. Tuy nhiên, hãy xem xét điều này: bây giờ bạn có thể ghi đè phương thức factory trong một lớp con và thay đổi lớp của các sản phẩm được tạo ra bởi phương thức đó.

Tuy nhiên, có một hạn chế nhỏ: các lớp con chỉ có thể trả về các loại sản phẩm khác nhau nếu những sản phẩm này có một Base Class hoặc Interface chung. Ngoài ra, phương thức factory trong Base Class nên có kiểu trả về được khai báo là Interface hoặc Base Class đó.

## Cách triển khai

Một Factory Pattern bao gồm các thành phần cơ bản sau:

- Super Class: môt supper class trong Factory Pattern có thể là một interface, abstract class hay một class thông thường.
- Sub Classes: các sub class sẽ implement các phương thức của supper class theo nghiệp vụ riêng của nó.
- Factory Class: một class chịu tránh nhiệm khởi tạo các đối tượng sub class dựa theo tham số đầu vào. Lưu ý: lớp này là Singleton hoặc cung cấp một public static method cho việc truy xuất và khởi tạo đối tượng. Factory class sử dụng if-else hoặc switch-case để xác định class con đầu ra.

## Ưu và nhược điểm

### Ưu điểm

### Nhược điểm
