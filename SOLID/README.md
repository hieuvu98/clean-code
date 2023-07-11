# Những nguyên tắc lập trình

## KISS
## Separation of Concerns (SoC)
## Principle of Least Astonishment (POLA)
## Law of Demeter (LoD)
## DRY

## YAGNI

## Solid Principles

### S -Single responsibility principle

- Một class chỉ nên giữ 1 trách nhiệm duy nhất (Chỉ có thể sửa đổi class với 1 lý do duy nhất)
- Một class có quá nhiều chức năng cũng sẽ trở nên cồng kềnh và phức tạp. Khi yêu cầu thay đổi, một class quá cồng kềnh thì việc thay đổi code rất khó khăn và mất nhiều thời gian. Áp dụng nguyên lý đơn nhiệm chia các chức năng thành nhiều class khác nhau giúp việc quản lý, mở rộng, bảo trì code thuận tiện hơn.
- Lý do: 
    - Dễ quản lý mã nguồn
    - Các lớp tập trung vào nhiệm vụ của mình
    - Giảm tính phụ thuộc giữa các thành phần
    - Dễ dàng mở rộng, bảo trì
    - Có thể phát triển đồng thời các lớp độc lập với nhau
    
![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/osi-model.png)
### O - Open/closed principle

- Nội dung: Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó (open for extension but closed for modification)
- Theo nguyên lý này, mỗi khi ta muốn thêm chức năng,.. cho chương trình, chúng ta nên viết class mới mở rộng class cũ ( bằng cách kế thừa hoặc sở hữu class cũ) không nên sửa đổi class cũ.

```php
abstract class Connection()
{
        public abstract function doConnect();
}

class SqlServer extends Connection
{
    public function doConnect()
    {
        //connect with SqlServer
    }
}

class MySql extends Connection
{
    public function doConnect()
    {
        //connect with MySql
    }
}

class ConnectionManager
{
    public function doConnection(Connection $connection)
    {
        //something
        //.................
        //connection
        $connection->doConnect();
    }
}
```

### L - Liskov substitution principle

- Trong một chương trình, các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình

### I - Interface segregation principle

- Thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể
- Nếu thêm các phương thức không cần thiết vào 1 interface các lớp thực hiện giao tiếp (class implement interface) sẽ bị bắt buộc thực thi những phương thức không cần thiết đó. Điều này dẫn đến sự dư thừa trong thực thể.

### D - Dependency inversion principle

- Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả 2 nên phụ thuộc vào lớp trừu tượng abstraction
- Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại. ( Các class giao tiếp với nhau thông qua interface, không phải thông qua implementation.)
