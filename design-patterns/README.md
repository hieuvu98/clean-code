# Design Patterns

## Giới thiệu Design Patterns

### Design Patterns là gì?

Design Patterns là một kỹ thuật trong lập trình hướng đối tượng, nó khá quan trọng và mọi lập trình viên muốn giỏi đều phải biết. Design Pattern được sử dụng thường xuyên trong các ngôn ngữ OOP. Nó cung cấp cho bạn các “mẫu thiết kế”, giải pháp để giải quyết các vấn đề chung, thường gặp trong lập trình. Các vấn đề mà bạn gặp phải có thể bạn sẽ tự nghĩ ra cách giải quyết nhưng có thể nó chưa phải là tối ưu. Design Pattern giúp bạn giải quyết vấn đề một cách tối ưu nhất, cung cấp cho bạn các giải pháp trong lập trình OOP.

### Lợi ích của Design Patterns

Design Pattern mang lại nhiều ý nghĩa và lợi ích cho lập trình, bao gồm:
- Giúp giải quyết vấn đề một cách hiệu quả và tối ưu: cung cấp các giải pháp đã được kiểm nghiệm và tối ưu hóa, giúp các lập trình viên giải quyết các vấn đề một cách nhanh chóng và hiêu quả.
- Tăng tính tái sử dụng của code: giúp các lập trình viên tái sử dụng code đã có, từ đó giảm thiểu thời gian và công ức phát triển phần mềm.
- Tăng tính bảo trì và bảo dưỡng của phần mềm: giúp phần mềm dễ dàng bảo trì và bảo dưỡng hơn.
- Tăng tính dể hiểu và dễ đọc của code: giúp code dễ hiểu và dễ đọc hơn, giúp việc công tác giữa các lập trình viên trở nên dễ dàng hơn.

## Các loại Design Patterns

### Creational Patterns (Nhóm khởi tạo)

Creational Design Patterns liên quan tới việc khởi tạo đối tượng. Nhóm pattern này cung cấp các cơ chế tạo đối tượng một cách linh hoạt và phù hợp với bối cảnh sử dụng.

#### Singleton
Sử dụng singleton pattern để hạn chế khởi tạo đối tượng, giảm bớt được khai báo đối tượng dư thừa, nó đảm bảo chỉ duy nhất một thể hiện của một lớp được tạo ra trong suốt chương trình. Đây sẽ là một pattern vô cùng hữu ích cho các trường hợp bạn phải xử lý 1 tác vụ ở nhiều nơi, có thể hạn chế được số lần khai báo đối tượng không cần thiết.

```typescript
class Singleton {
    private static instance: Singleton;
    private constructor() { }

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
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
```

##### So sánh
Singleton Pattern có thể được so sánh với một số Design Pattern tương tự, chẳng hạn như:

- Factory Pattern: Factory Pattern cung cấp một cách để tạo các đối tượng của lớp một cách linh hoạt. Tuy nhiên, Factory Pattern không đảm bảo rằng chỉ có một đối tượng của lớp được tạo ra.
- Prototype Pattern: Prototype Pattern cung cấp một cách để tạo các bản sao của đối tượng. Prototype Pattern cũng có thể được sử dụng để tạo một đối tượng duy nhất của lớp. Tuy nhiên, Prototype Pattern có thể phức tạp hơn Singleton Pattern.

##### Lưu ý
Khi áp dụng Singleton Pattern, cần lưu ý một số điểm sau:

- Singleton Pattern có thể làm giảm tính linh hoạt của ứng dụng. Ví dụ, nếu bạn cần tạo ra nhiều instance của một class, bạn sẽ cần phải thay đổi code để xóa phương thức getInstance().
- Singleton Pattern có thể gây ra vấn đề khi test. Ví dụ, nếu bạn đang test một class sử dụng Singleton Pattern, bạn sẽ cần tạo ra một instance giả của class đó.

##### Ưu và nhược điểm

#### Factory Method

#### Abstract Factory

#### Builder

#### Prototype

### Structural Patterns (Nhóm cấu trúc)

### Behavioral Patterns (Nhóm hành vi/ tương tác)
