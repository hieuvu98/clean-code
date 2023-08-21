# Những nguyên tắc lập trình

## KISS - Keep It Simple Stupid

- Nguyên tắc thiết kế phần mềm này nói rằng các thiết kế, giải pháp, hệ thống và sản phẩm hoạt động tốt nhất nếu chúng được giữ đơn giản. Có nghĩa là chúng ta nên ưu tiên sự đơn giản hơn sự phức tạp và tránh sự phức tạp càng nhiều càng tốt.
- Ưu điểm:
  - có thể giải quyết nhiều vấn đề hơn, nhanh hơn.
  - có thể tạo mã để giải quyết các vấn đề phức tạp với ít dòng mã hơn
  - có thể tạo mã chất lượng cao hơn
  - có thể xây dựng các hệ thống lớn hơn, dễ bảo trì hơn
  - Cơ sở mã của bạn sẽ linh hoạt hơn, dễ dàng mở rộng, sửa đổi hoặc cấu trúc lại khi có yêu cầu mới
  - Có thể làm việc trong các nhóm phát triển lớn và các dự án lớn vì tất cả mã đều đơn giản
- Cách để áp dụng KISS:
  - Chia nhỏ các nhiệm vụ của bạn thành các nhiệm vụ phụ mà bạn nghĩ sẽ mất không quá 4-12 giờ để viết mã
  - Nếu bạn có nhiều điều kiện trong method của mình, hãy chia chúng thành các method nhỏ hơn.
  - Hãy chia nhỏ các vấn đề của bạn thành nhiều vấn đề nhỏ. Mỗi vấn đề sẽ có thể được giải quyết trong một hoặc một vài lớp
  - Giữ các method của bạn nhỏ, mỗi method không bao giờ được nhiều hơn 30-40 dòng. Mỗi method chỉ nên giải quyết một vấn đề nhỏ, không có nhiều trường hợp sử dụng
  - Giữ cho các lớp (class) của bạn đủ nhỏ
  - Đừng ngại vứt bỏ code.
  - Đối với tất cả các tình huống khác, hãy cố gắng giữ cho nó đơn giản nhất có thể, đây là mẫu hành vi khó áp dụng nhất (pattern), nhưng khi bạn đã có nó, bạn sẽ nhìn lại và sẽ nói, Tôi không thể tưởng tượng được mình đã làm việc như thế nào trước.

```c++
// Good example
bool isPalindrome(string word) {
    string reversedWord = string(word.rbegin(), word.rend());
    return word == reversedWord;
}

// Bad example
bool isPalindrome(string word) {
    bool result = true;
    for(int i = 0; i < word.size() / 2; i++) {
        if(word[i] != word[word.size() - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}
```

## Separation of Concerns (SoC)

## Principle of Least Astonishment (POLA)

## Law of Demeter (LoD)

## DRY - Don’t repeat yourself

- Đừng tự bóp dái chính mình. Mọi logic nên có một biểu diễn duy nhất, rõ ràng trong một hệ thống. Nguyên tắc này thúc đẩy việc tạo mã có thể tái sử dụng và giảm khả năng xảy ra lỗi bằng cách tránh trùng lặp logic.

- Một vài ví dụ:

```c++
// Good example
class Calculator {
    public:
    int add(int a, int b) {
        return a + b;
    }
    int subtract(int a, int b) {
        return a - b;
    }
    int multiply(int a, int b) {
        return a * b;
    }
    int divide(int a, int b) {
        return a / b;
    }
};

// Bad example
class Calculator {
    public:
    int add(int a, int b) {
        int result = a + b;
        cout << "Result of add: " << result << endl;
        return result;
    }
    int subtract(int a, int b) {
        int result = a - b;
        cout << "Result of subtract: " << result << endl;
        return result;
    }
    int multiply(int a, int b) {
        int result = a * b;
        cout << "Result of multiply: " << result << endl;
        return result;
    }
    int divide(int a, int b) {
        int result = a / b;
        cout << "Result of divide: " << result << endl;
        return result;
    }
};
```

```c++
// NOT DRY code
void MakeTea(string type, bool withSugar) {
    cout << "Boil water. " << endl;
    if (withSugar) {
    	cout << "Add sugar. " << endl;
    }
    cout << "Brew the" << type << " tea bag." << endl;
}

void MakeCoffee(bool withSugar) {
    cout << "Boil water. " << endl;
    if (withSugar) {
    	cout << "Add sugar. " << endl;
    }
    cout << "Brew the coffee." << endl;
}

// DRY code
void BoilWaterAndAddSugar(bool withSugar) {
    cout << "Boil water. " << endl;
    if (withSugar) {
        cout << "Add sugar. " << endl;
    }
}

void MakeTea(string type, bool withSugar) {
    BoilWaterAndAddSugar(withSugar);
    cout << "Brew the" << type << " tea bag." << endl;
}

void MakeCoffee(bool withSugar) {
    BoilWaterAndAddSugar(withSugar);
}
```

## YAGNI

## Solid Principles

### S - Single responsibility principle

- Một class chỉ nên giữ 1 trách nhiệm duy nhất (Chỉ có thể sửa đổi class với 1 lý do duy nhất)
- Một class có quá nhiều chức năng cũng sẽ trở nên cồng kềnh và phức tạp. Khi yêu cầu thay đổi, một class quá cồng kềnh thì việc thay đổi code rất khó khăn và mất nhiều thời gian. Áp dụng nguyên lý đơn nhiệm chia các chức năng thành nhiều class khác nhau giúp việc quản lý, mở rộng, bảo trì code thuận tiện hơn.
- Lý do:
  - Dễ quản lý mã nguồn
  - Các lớp tập trung vào nhiệm vụ của mình
  - Giảm tính phụ thuộc giữa các thành phần
  - Dễ dàng mở rộng, bảo trì
  - Có thể phát triển đồng thời các lớp độc lập với nhau

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/osi-model.png)

- Ví dụ 1:

```c++
// Bad Code
class User {
public:
    void login() {
        cout << "User logged in" << endl;
    }
    void logout() {
        cout << "User logged out" << endl;
    }
    void printUserInfo(string username) {
        cout << "Username: " << username << endl;
    }
}


// Good Code
class Authentication {
public:
    void login() {
        cout << "User logged in" << endl;
    }
    void logout() {
        cout << "User logged out" << endl;
    }
};

class UserInfo {
public:
    void printUserInfo(string username) {
        cout << "Username: " << username << endl;
    }
};

class User : public Authentication, public UserInfo {
};

int main() {
    User user;
    user.login();
    user.printUserInfo("User Test");
    user.logout();
    return 0;
}
```

- Ví dụ 2:

```c++
// Bad
class Invoice {
  public:
  void AddInvoice() {
    // your logic
  }

  void DeleteInvoice() {
    // your logic
  }

  void GenerateReport() {
    // your logic
  }

  void EmailReport() {
    // your logic
  }
}



// Good
class Invoice {
  public:
  void AddInvoice() {
    // your logic
  }

  void DeleteInvoice() {
    // your logic
  }
}

class Invoice {
  public:
  void AddInvoice() {
    // your logic
  }

  void DeleteInvoice() {
    // your logic
  }
}

class Report {
  public:
  void GenerateReport() {
    // your logic
  }
}

class Email {
  public:
  void EmailReport() {
    // your logic
  }
}
```

### O - Open/closed principle

- Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó
- Theo nguyên lý này, mỗi khi ta muốn thêm chức năng,.. cho chương trình, chúng ta nên viết class mới mở rộng class cũ ( bằng cách kế thừa hoặc sở hữu class cũ) không nên sửa đổi class cũ.

- Ví dụ một hệ thống ngân hàng quản lý các loại tài khoản khác nhau như: tài khoản tiết kiệm, tài khoản thẻ tín dụng và tài khoản tiền gửi cố định.

```c++
// Bad
class Account {
  private:
    double balance;
    int type_of_account;

  public:
  Account(double balance, int type_of_account): balance(balance),
  type_of_account(type_of_account) {}

  void deposit(double amount) {
    balance += amount;
  }

  void withdraw(double amount) {
    balance -= amount;
  }

  double getBalance() const {
    return balance;
  }

  double calculateInterest() const {
    // LOGIC based on type of account
    if (type_of_account == 1) {

    } else if (type_of_account == 2) {

    }
  }
};
```

- Chúng ta có thể nhận thấy rằng logic tính lãi có thể khác nhau đối với từng loại tài khoản. Có nghĩa là nếu chúng ta cần thêm một loại tài khoản mới trong hệ thống ngân hàng, chúng ta cần sửa đổi chức năng tính lãi cho từng loại tài khoản. Để giải quyết vấn đề này chúng ta sử dụng tính kế thừa và đa hình:

```c++
class Account {
  public: virtual void deposit(double balance) = 0;
  virtual void withdraw(double balance) = 0;
  virtual double getBalance() = 0;
  virtual double calculateInterest() = 0;
};

class SavingsAccount: public Account {

  public: SavingsAccount(double balance): balance(balance) {}

  void deposit(double amount) override {
    balance += amount;
  }

  void withdraw(double amount) override {
    balance -= amount;
  }

  double getBalance() override {
    return balance;
  }

  double calculateInterest() override {
    return balance * 0.04; // 4% interest rate
  }
  private: double balance;
};

class FixedDepositAccount: public Account {

  public: FixedDepositAccount(double balance, int time): balance(balance) {}

  void deposit(double amount) override {
    balance += amount;
  }

  void withdraw(double amount) override {
    // Logic to withdraw after certain time
    balance -= amount;
  }

  double getBalance() override {
    return balance;
  }

  double calculateInterest() override {
    return balance * 0.08; // 8% interest rate
  }
  private: double balance;
  int time;
};

class CreditCardAccount: public Account {
  public: CreditCardAccount(double balance, double limit): balance(balance),
  limit(limit) {}
  void deposit(double amount) override {
    balance -= amount;
  }
  void withdraw(double amount) override {
    balance += amount; // credit card withdrawal
  }
  double getBalance() override {
    return balance;
  }
  double calculateInterest() override {
    return balance * 0.18; // 18% interest rate
  }

  void increaseLimit(double addon) {
    limit += addon;
  }
  private: double balance;
  double limit;
};
```

### L - Liskov substitution principle

- Nguyên lý thay thế Liskov (Liskov substitution principle - LSP) nói rằng trong một chương trình các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình.
- Ưu điểm của việc sử dụng Nguyên tắc thay thế Liskov
  - Tăng khả năng sử dụng lại mã
  - Đơn giản hóa việc bảo trì mã: chúng ta có thể thay đổi một lớp mà không ảnh hưởng đến hành vi của các lớp khác trong nhóm.
  - Thúc đẩy tính module: Khi chúng ta sử dụng LSP để tạo một tập hợp các lớp liên quan, mỗi lớp có thể được coi là một module độc lập, nghĩa là nó có thể được phát triển và kiểm tra độc lập với các lớp khác.
  - Nâng cao chất lượng mã: Khi tuân theo LSP, chúng ta có thể chắc chắn rằng mọi lớp trong nhóm đều hoạt động nhất quán. Điều này có nghĩa là mỗi lớp sẽ thực hiện cùng một tập hợp các phương thức và có cùng hành vi như lớp cha. Tính nhất quán này có thể giúp giảm khả năng bắt lỗi và hành vi không mong muốn, do đó cải thiện chất lượng tổng thể của mã của chúng tôi.

#### Ví dụ thứ nhất vi phạm nguyên tắc LSP:

Giả sử chúng ta có lớp cơ sở Bird và các lớp con Crow, Penguin, Duck kế thừa từ Bird. Chim cánh cụt kế thừa class Bird nhưng cánh cụt không biết bay nên khi gọi hàm fly ta sẽ quăng ra exception.

```c++
class Bird {
  public: virtual void fly() = 0;
  virtual void walk() = 0;
};

class Crow: public Bird {
  public:
    void fly() override {
      cout << "Crow is flying" << endl;
    }
    void walk() {
      cout << "Crow is walking" << endl;
    }
};

class Penguin: public Bird {
  public:
    void fly() override {
      throw runtime_error("Penguins can't fly");
    }
    void walk() override {
      cout << "Penguin is walking" << endl;
    }
};

class Duck: public Bird {
  public:
    void fly() override {
      cout << "Duck is flying" << endl;
    }
    void walk() {
      cout << "Duck is walking" << endl;
    }
};

```

- Output:

```c++
terminate called after throwing an instance of 'std::runtime_error'
  what():  Penguins can't fly
```

- Trong ví dụ trên, đối tượng của Penguin không thể truy cập phương thức fly. Vì vậy vấn đề có thể giải quyết theo cách sau:

```c++
class Bird {
	// logic
};

class FlyingBird: public Bird {
  public: virtual void fly() {}
};

class WalkingBird: public Bird {
  public: virtual void walk() {}
};

class Crow: public FlyingBird, WalkingBird {
  public:
    void fly() override {
      cout << "Crow is flying" << endl;
    }
    void walk() override {
      cout << "Crow is walking" << endl;
    }
};

class Penguin: public WalkingBird {
  public:
    void walk() override {
      cout << "Penguin is walking" << endl;
    }
};

class Duck: public FlyingBird, WalkingBird {
  public:
    void fly() override {
      cout << "Duck is flying" << endl;
    }
    void walk() override {
      cout << "Duck is walking" << endl;
    }
};
```

#### Ví dụ thứ 2 vi phạm nguyên tắc LSP: Class con thay đổi hành vi class cha

Ta có hai lớp con Square và Rectangle kế thừa từ lớp cơ sở Shape, lớp SquareRectangle kế thừa từ lớp Rectangle.
Việc tính toán diện tích class SquareRectangle bằng cách sử dụng width _ width thay vì width _ height. Điều này vi phạm Nguyên tắc thay thế Liskov vì không thể thay thế class SquareRectangle cho class Rectangle trong hàm printArea() mà không gây ra lỗi.

```c++
class Shape {
  public:
    virtual int area() = 0;
    void printArea(Shape* shape) {
      cout << "Area: " << shape->area() << endl;
    }
};

class Rectangle : public Shape {
  public:
    int width = 4;
    int height = 5;
    int area() override {
        return width * height;
    }
};

class SquareRectangle : public Rectangle {
public:
  int area() override {
      return width * width;
  }
};

class Square : public Shape {
  public:
    int side;
    int area() override {
        return side * side;
    }
};

void printArea(Shape* shape) {
  cout << "Area: " << shape->area() << endl;
}

int main() {
	Rectangle* rectangle = new Rectangle();
	printArea(rectangle); // prints "Area: 20"

	SquareRectangle* squareRectangle = new SquareRectangle();
	printArea(squareRectangle); // prints "Area: 16"
	return 0;
}
```

- Trong trường hợp này ta cần tạo một lớp cơ sở mới xác định interface cho Rectangle và các lớp con của nó:

```c++
class RectangleBase {
	public:
	  virtual int getWidth() = 0;
	  virtual int getHeight() = 0;
};

class Shape : public RectangleBase {
	public:
	  virtual int area() = 0;
	  int getWidth() override { return 0; }
	  int getHeight() override { return 0; }
};

class Rectangle : public Shape {
	public:
	  int width;
	  int height;
	  int area() override {
	      return width * height;
	  }
	  int getWidth() override { return width; }
	  int getHeight() override { return height; }
};

class Square : public Shape {
	public:
	  int side;
	  int area() override {
	      return side * side;
	  }
	  int getWidth() override { return side; }
	  int getHeight() override { return side; }
};

class SquareRectangle : public Rectangle {
	public:
	  int area() override {
	      return getWidth() * getWidth();
	  }
};
```

- Lớp Shape kế thừa từ RectangleBase và triển khai các function getWidth() và getHeight(). Các lớp Rectangle và SquareRectangle kế thừa từ Shape và override các hàm getWidth() và getHeight() để trả về kích thước tương ứng của chúng.
- Lớp SquareRectangle sử dụng hàm getWidth() để tính diện tích của hình.
- Với cách này ta dã khắc phục lỗi vi phạm nguyên tắc thay thế Liskov bằng cách đảm bảo rằng bất kỳ lớp con nào của Rectangle đều hoạt động giống như Rectangle trong ngữ cảnh của hàm printArea().

Cách giải quyết thứ 2:

```c++
class Shape {
	public:
	  virtual int area() = 0;
};

class Rectangle : public Shape {
	public:
	  int width;
	  int height;
	  int area() override {
	      return width * height;
	  }
};

class Square : public Rectangle {
	public:
	  int side;
	  int area() override {
	      return side * side;
	  }
};
```

### I - Interface segregation principle

- Nguyên tắc chia nhỏ interface phát biểu rằng: thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể
- Nếu thêm các phương thức không cần thiết vào 1 interface các lớp thực hiện giao tiếp (class implement interface) sẽ bị bắt buộc thực thi những phương thức không cần thiết đó. Điều này dẫn đến sự dư thừa trong thực thể.

#### Ví dụ vi phạm nguyên tắc ISP
##### Ví dụ 1
Giả sử chúng ta phải thiết kế một hệ thống Printers , trong đó chúng ta phải triển khai các loại máy in khác nhau như LaserPrinter, InkJetPrinter , LEDPrinter , 3DPrinter. Chúng ta có thể có một lớp trừu tượng cho Printer sẽ thực hiện các phương thức như Print, Scan and Fax.

```c++
class Printer {
  public:
    virtual void print() = 0;
    virtual void scan() = 0;
    virtual void fax() = 0;
};
class InkJetPrinter : public Printer {
  public:
    void print() override {
      cout << "InkJet Printer Printing" << endl;
      // Implementation of print for InkJet printer
    }

    void scan() override {
      cout << "InkJet Printer Scanning" << endl;
      // Implementation of scan for InkJet printer
    }

    void fax() override {
      cout << "InkJet Printer Faxing" << endl;
      // Implementation of fax for InkJet printer
    }
};
class LaserPrinter : public Printer {
  public:
    void print() override {
      cout << "Laser Printer Printing" << endl;
      // Implementation of print for laser printer
    }

    void scan() override {
      cout << "Laser Printer Scanning" << endl;
      // Implementation of scan for laser printer
    }

    void fax() override {
        throw runtime_error("Laser Printer Can't Fax");
    }
};
```

Trường hợp này xảy ra một vấn đề: lớp LaserPrinter không cần phương thức fax(), nhưng nó buộc phải implement nó vì nó phải tuân theo class Printer. Điều này vi phạm nguyên tắc ISP vì lớp LaserPrinter buộc phải triển khai fax ngay cả khi nó không hỗ trợ chức năng Fax.
Để khắc phục vi phạm này, chúng ta có thể tạo các interface riêng cho các phương thức print(), scan() và fax():

```c++
class IPrintable {
  public:
    virtual void print() = 0;
};

class IScannable {
  public:
    virtual void scan() = 0;
};

class IFaxable {
  public:
    virtual void fax() = 0;
};

class InkJetPrinter : public IPrintable, public IScannable, public IFaxable {
  public:
    void print() override {
      cout << "InkJet Printer Printing" << endl;
      // Implementation of print for InkJet printer
    }

    void scan() override {
      cout << "InkJet Printer Scanning" << endl;
      // Implementation of scan for InkJet printer
    }

    void fax() override {
      cout << "InkJet Printer Faxing" << endl;
      // Implementation of fax for InkJet printer
    }
};

class LaserPrinter : public IPrintable, public IScannable {
  public:
    void print() override {
      cout << "Laser Printer Printing" << endl;
      // Implementation of print for laser printer
    }

    void scan() override {
      cout << "Laser Printer Scanning" << endl;
      // Implementation of scan for laser printer
    }
};
```

##### Ví dụ 2
Hệ thống phần mềm CAD bao gồm các loại vật rắn khác nhau như Cubes, Sphere, Polygon có các chức năng để hiển thị chúng trên màn hình, tính toán thể tích và cung cấp cách lưu trữ và tìm nạp các vật rắn này.

```c++
class ISolid {
  public:
    virtual void draw() = 0;
    virtual double calculate() = 0;
    virtual void serialize() = 0;
    virtual void deserialize() = 0;
};

- Chúng ta có thể tạo ba giao diện như IRender, ICalculate, IStore để có chức năng cụ thể hơn:

```c++
class IRender {
  public:
    virtual void draw() = 0;
};

class ICalculate {
  public:
    virtual void calculate() = 0;
};

class IStore {
  public:
    virtual void serialize() = 0;
    virtual void deserialize() = 0;
};
```
Giờ đây các lớp Cube, Sphere và Polygon chỉ cần triển khai các interface có liên quan đến chúng.

### D - Dependency inversion principle

- Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả 2 nên phụ thuộc vào lớp trừu tượng abstraction
- Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại. ( Các class giao tiếp với nhau thông qua interface, không phải thông qua implementation.)
