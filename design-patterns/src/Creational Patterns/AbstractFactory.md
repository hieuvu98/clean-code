# Abstract Factory

## Giới thiệu

Abstract Factory là một mẫu thiết kế cho phép bạn tạo ra các họ đối tượng có liên quan mà không cần chỉ định các lớp cụ thể của chúng.

## Đặt vấn đề
Giả sử một công ty đồ nội thất chuyên sản xuất nhóm đồ nội thất chính: Chair + Sofa + CoffeeTable. Các nhóm sản phẩm biến thể khác: Modern, Victorian, ArtDeco

Bạn cần một phương pháp để tạo ra các đồ nội thất riêng lẻ sao cho chúng phù hợp với các món đồ khác cùng bộ. Khách hàng thường rất bực mình khi nhận được đồ nội thất không đồng bộ.

Ngoài ra, công ty thường xuyên thay đổi sản phẩm, bổ sung các nhóm sản phẩm mới.
Chúng ta cần một cách để dễ dàng tạo ra và thay đổi các nhóm sản phẩm mà không ảnh hưởng đến code hiện tại.

## Giải pháp

Để giải quyết vấn đề trên, Abstract Factory đưa ra ý tưởng:
- Điều đầu tiên là khai báo rõ ràng các interface cho từng sản phẩm riêng biệt của họ sản phẩm (ví dụ: Chair + Sofa + CoffeeTable). Sau đó, bạn có thể làm cho tất cả các biến thể của sản phẩm tuân theo các interface đó. Ví dụ, tất cả các biến thể ghế có thể triển khai Chair interface; tất cả các biến thể CoffeeTable có thể triển khai CoffeeTable interface, v.v.

- Tạo một interface có danh sách các phương thức tạo cho tất cả các sản phẩm thuộc họ sản phẩm (ví dụ: createChair, createSofa và createCoffeeTable). Các phương thức này phải trả về các loại sản phẩm trừu tượng được biểu diễn bởi các interface mà chúng ta đã trích xuất trước đó: Chair, Sofa, CoffeeTablev.v.