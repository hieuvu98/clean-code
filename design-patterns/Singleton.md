# Singleton

## Giới thiệu

Sử dụng singleton pattern để hạn chế khởi tạo đối tượng, giảm bớt được khai báo đối tượng dư thừa, nó đảm bảo chỉ duy nhất một thể hiện của một lớp được tạo ra trong suốt chương trình. Đây sẽ là một pattern vô cùng hữu ích cho các trường hợp bạn phải xử lý 1 tác vụ ở nhiều nơi, có thể hạn chế được số lần khai báo đối tượng không cần thiết.

## Cách triển khai

```typescript
class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientCode();
```

## So sánh

Singleton Pattern có thể được so sánh với một số Design Pattern tương tự, chẳng hạn như:

- Factory Pattern: Factory Pattern cung cấp một cách để tạo các đối tượng của lớp một cách linh hoạt. Tuy nhiên, Factory Pattern không đảm bảo rằng chỉ có một đối tượng của lớp được tạo ra.
- Prototype Pattern: Prototype Pattern cung cấp một cách để tạo các bản sao của đối tượng. Prototype Pattern cũng có thể được sử dụng để tạo một đối tượng duy nhất của lớp. Tuy nhiên, Prototype Pattern có thể phức tạp hơn Singleton Pattern.

## Lưu ý

Khi áp dụng Singleton Pattern, cần lưu ý một số điểm sau:

## Ưu và nhược điểm

### Ưu điểm

- Chắc chắn là class chỉ có một instance duy nhất.
- Khi cần quản lý tài nguyên chung: Singleton Pattern thường được sử dụng khi cần quản lý một tài nguyên chung nào đó, ví dụ như một kết nối cơ sở dữ liệu hoặc một tệp log.
- Khi cần kiểm soát việc truy cập vào một tài nguyên chung: Singleton Pattern đảm bảo rằng chỉ có một thực thể duy nhất được truy cập vào tài nguyên, giúp giảm thiểu xung đột và tăng hiệu suất.
- Khi cần giữ trạng thái toàn cục: Singleton Pattern có thể được sử dụng để lưu giữ trạng thái toàn cục của ứng dụng. Tuy nhiên, cần cẩn thận với việc sử dụng Singleton để lưu giữ trạng thái, vì nó có thể tạo ra các hiệu ứng phụ không mong muốn và làm giảm khả năng kiểm thử.

### Nhược điểm

- Vi phạm nguyên tắc Single Responsibility bởi lớp Singleton phải làm 2 nhiệm vụ: cung cấp chức năng truy cập toàn cục và kiểm soát số lượng instance của nó.
- Khó mở rộng: có thể làm giảm tính linh hoạt của ứng dụng. Ví dụ, nếu bạn cần tạo ra nhiều instance của một class, bạn sẽ cần phải thay đổi code để xóa phương thức getInstance().
- Vấn đề với đa luồng: Khi sử dụng Singleton trong môi trường đa luồng, có thể phát sinh các vấn đề liên quan đến việc đồng bộ hóa. Nếu không cẩn thận, việc tạo ra các instance có thể xảy ra nhiều lần, dẫn đến các hậu quả không mong muốn.
- Singleton Pattern có thể gây ra vấn đề khi test. Ví dụ, nếu bạn đang test một class sử dụng Singleton Pattern, bạn sẽ cần tạo ra một instance giả của class đó.
