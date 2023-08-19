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

```C++
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

```C++
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

```C++
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

```C++
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

```C++
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

  void GenerateReport() {
    // your logic
  }

  void EmailReport() {
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

- Nội dung: Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó (open for extension but closed for modification)
- Theo nguyên lý này, mỗi khi ta muốn thêm chức năng,.. cho chương trình, chúng ta nên viết class mới mở rộng class cũ ( bằng cách kế thừa hoặc sở hữu class cũ) không nên sửa đổi class cũ.

- Ví dụ một hệ thống ngân hàng quản lý các loại tài khoản khác nhau như: tài khoản tiết kiệm, tài khoản thẻ tín dụng và tài khoản tiền gửi cố định.

```C++
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

```C++
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
[Tài liệu tham khảo](https://www.linkedin.com/pulse/understanding-solid-c-open-closed-principle-abhishek-anand/)


### L - Liskov substitution principle

- Nguyên lý thay thế Liskov (Liskov substitution principle - LSP) nói rằng trong một chương trình các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình.

- Ví dụ 1:
```C++
class Bird {
    public:
        virtual void fly() = 0;
};

class Crow : public Bird {
    public:
        void fly() override {
            cout << "Crow is flying" << endl;
        }
};

class Penguin : public Bird {
    public:
        void fly() override {
            throw runtime_error("Penguins can't fly");
        }
};
```
### I - Interface segregation principle

- Thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể
- Nếu thêm các phương thức không cần thiết vào 1 interface các lớp thực hiện giao tiếp (class implement interface) sẽ bị bắt buộc thực thi những phương thức không cần thiết đó. Điều này dẫn đến sự dư thừa trong thực thể.

### D - Dependency inversion principle

- Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả 2 nên phụ thuộc vào lớp trừu tượng abstraction
- Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại. ( Các class giao tiếp với nhau thông qua interface, không phải thông qua implementation.)
