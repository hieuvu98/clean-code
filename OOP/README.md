# OOP (Object-Oriented Programming)

## Tổng quan

Lập trình hướng đối tượng (object-oriented programming) là một phương pháp thiết kế và phát triển phần mềm. OOP là phương thức tư duy mới để giải quyết vấn đề bằng máy tính. Để đạt kết quả, lập trình viên phải nắn vấn đề thành một thực thể quen thuộc với máy tính. Cách tiếp cận hướng đối tượng cung cấp một giải pháp toàn vẹn để giải quyết vấn.

Đối với một ngôn ngữ lập trình hỗ trợ OOP thì việc triển khai kỹ thuật lập trình hướng đối tượng sẽ dễ dàng hơn. Kỹ thuật lập trình hướng đối tượng cải tiến việc phát triển các hệ thống phần mềm. Kỹ thuật ấy đề cao nhân tố chức năng (fucntionality) và các mối quan hệ dữ liệu.

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/oop-la-gi.jpg)

Trong mô hình OOP, mỗi object là một thực thể riêng biệt gồm những attribute (thuộc tính) và method (phương thức). Class thì giống như cái khuôn để “đúc” ra object và cũng có hai thành phần là attribute và method. Attribute chính là các thông tin của object còn method là những hành động mà object có thể thực hiện.

## Các đặc điểm cơ bản của lập trình hướng đối tượng

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/procedural-programming-vs-object-oriented-programming.png)

### Tính trừu tượng(Abstraction)

Là một cơ chế cho phép biểu diễn một tình huống phức tạp trong thế giới thực bằng một mô hình được đơn giản hóa. Nó bao gồm việc tập trung vào các tính chất quan trọng của một đối tượng, ẩn việc triển khai thực tế của một ứng dụng khỏi người dùng.

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/L9iXI.png)

Khi một lập trình viên phải phát triển một chương trình ứng dụng thì không có nghĩa là người ấy lập tức viết mã cho ứng dụng ấy. Trước hết, người ấy phải nghiên cứu ứng dụng và xác định những thành phần tạo nên ứng dụng. Kế tiếp, người ấy phải xác định những thông tin cần thiết về mỗi thành phần.

Người dùng chỉ cần biết có thể thực hiện những gì (what), còn việc thực hiện ra sao thì không cần quan tâm (how).

Ý nghĩa :

- Giao diện người dùng đơn giản, cấp cao.
- Các đoạn mã phức tạp bị ẩn đi.
- Nâng cao vấn đề bảo mật, bảo vệ dự liệu không bị lộ.
- Việc bảo trì phần mềm dễ dàng hơn.
- Việc cập nhật hay thay đổi mã sẽ rất ít khi ảnh hưởng đến Tính trừu tượng.

Ví dụ: Bài toán quản lý sinh viên chúng ta chỉ cần quản lý các thông tin như

- Họ tên
- Ngày sinh
- Giới tính
- Điểm thi

#### Các phương pháp trừu tượng hóa

##### Trừu tượng hóa dữ liệu

- Khi dữ liệu của đối tượng không hiển thị ra bên ngoài, thì đó gọi là trừu tượng hóa dữ liệu. Nếu cần, lập trình viên có thể cấp quyền truy cập vào dữ liệu của đối tượng bằng nhiều cách. Thông thường họ sử dụng một số phương thức, chẳng hạn như get, set.

##### Trừu tượng hóa quy trình

- Lập trình viên không cần phải cung cấp chi tiết về tất cả các chức năng khác nhau của một đối tượng. Khi họ ẩn việc triển khai nội bộ của các chức năng liên quan đến hoạt động của người dùng, đó gọi là Trừu tượng hóa quy trình.

### Tính đóng gói dữ liệu (Encapsulation)

- Tính đóng gói là tiến trình che giấu việc thực thi những chi tiết của một đối tượng đối với người sử dụng đối tượng ấy. Tính chất này không cho phép người dùng trực tiếp tác động đến dữ liệu bên trong đối tượng mà phải thông qua các phương thức mà đối tượng cung cấp. Tính chất này đảm bảo tính toàn vẹn của đối tượng.
- Tính đóng gói được cung cấp bởi một bộ các từ khóa được gọi là Access Modifier, chúng dùng để giới hạn hoặc quy định phạm vi truy cập của một phương thức trong lớp. Cụ thể:

  - Private (riêng tư): phương thức có khai báo private chỉ có thể được truy cập trong chính lớp được khai báo đó.
  - Public (công cộng): phương thức có khai báo public có thể được truy cập ở bất cứ lớp nào khác.
  - Protected (được bảo vệ): phương thức có khai báo protected chỉ có thể được truy cập thông qua Tính kế thừa.
  - Default (Mặc định): là khi phương thức không được khái báo rõ ràng. Thông thường thì nếu không được khai báo, phương thức sẽ được hiểu là public theo mặc định.

    ![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/Encapsulation-illustration-with-capsule.png)

- Ví dụ về tính đóng gói:

```C++
#include <iostream>

using namespace std;

class Student {
  private: string firstName;
  string gender;

  public: string getFirstName() {
    return this -> firstName;
  }

  void setFirstName(string firstName) {
    this -> firstName = firstName;
    cout << "Set firstname:" << this -> firstName << endl;
  }

  string getGender() {
    return this -> gender;
  }

  void setGender(string gender) {
    if ("Male" != gender && "Female" != gender) {
      cout << "Set gender as Male or Female for gender";
    }

    this -> gender = gender;
    cout << "Gender is set to " << gender << endl;
  }
};

int main() {
  Student student;
  student.setFirstName("Student 1");
  student.setGender("Male");
}
```

- Tính đóng gói có một số ưu điểm như sau:
  - Tính linh hoạt: Mã được đóng gói sẽ linh hoạt, dễ sửa đổi hơn là những đoạn mã độc lập.
  - Khả năng tái sử dụng: Mã đã đóng gói có thể được tái sử dụng trong một ứng dụng hoặc nhiều ứng dụng. Từ một đối tượng, người dùng có thể chuyển sang dùng một đối tượng khác mà không phải đổi mã. Bởi vì cả hai đối tượng đều có giao diện như nhau.
  - Khả năng bảo trì: Mã được đóng gói trong những phần riêng biệt, như là lớp, phương thức, giao diện,… Do đó, việc thay đổi, cập nhật một phần của ứng dụng không ảnh hưởng đến những phần còn lại. Điều này giúp giảm công sức và tiết kiệm thời gian cho các nhà phát triển.
  - Khả năng kiểm thử: Đối với một lớp được đóng gói, Tester sẽ diễn viết những bài kiểm thử hơn. Các biến thành viên sẽ tập trung ở một nơi chứ không nằm rải rác. Do đó, kiểm thử viên cũng tiết kiệm được thời gian và công sức hơn.
  - Che giấu dữ liệu: Khi sử dụng phương thức, người dùng chỉ cần biết nó tạo ra kết quả gì. Họ không cần quan tâm đến những chi tiết bên trong của đối tượng để sử dụng nó.

### Tính kế thừa (Inheritance)

- Tính thừa kế cho phép một lớp chia sẻ các thuộc tính và các phương thức được định nghĩa trong một hoặc nhiều lớp khác.
- Lớp thừa hưởng từ một lớp khác được gọi là subclass (lớp con).

  ![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/inheritance-image.png)

#### Ưu điểm của tính kế thừa:

- Tính kế thừa giúp tăng khả năng tái sử dụng. Khi một lớp kế thừa hoặc dẫn xuất một lớp khác, thì nó có thể truy cập tất cả các chức năng của lớp mà nó kế thừa.
- Khả năng tái sử dụng nâng cao độ tin cậy. Chúng ta chỉ cần kiểm tra và gỡ lỗi với mã lớp cha, chứ không cần kiểm tra từng lớp con.
- Khi mã được tái sử dụng, sẽ giúp giảm chi phí phát triển và bảo trì.
- Các lớp con sẽ tuân thủ theo một giao diện (interface) chuẩn.
- Tính kế thừa giúp hạn chế sự dư thừa mã và hỗ trợ khả năng mở rộng mã.
- Lập trình viên có điều kiện thuận lợi để tạo các thư viện lớp (class libraries).

#### Nhược điểm của tính kế thừa:

- Các chức năng được kế thừa hoạt động chậm hơn chức năng bình thường, vì nó được thực hiện gián tiếp (lấy từ lớp cha) chứ không phải trực tiếp.
- Thông thường, các dữ liệu thành viên trong lớp cha không được sử dụng. Điều này có thể dẫn đến lãng phí bộ nhớ.
- Tính kế thừa làm tăng sự kết nối giữa lớp cơ sở và lớp kế thừa. Một thay đổi trong lớp cha sẽ ảnh hưởng đến tất cả các lớp con.
- Nếu sử dụng Tính kế thừa không đúng cách có thể dẫn đến các cách giải quyết sai lầm sau này.

#### Các loại kế thừa:

- Single Inheritance (Đơn kế thừa): đây là trường hợp một lớp chỉ được kế thừa từ một lớp duy nhất, tức là một lớp con chỉ có một lớp cha.

  ![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/Single-inheritance.jpg)

```C++
#include <iostream>

using namespace std;
class Animal {
  public: void eat() {
    cout << "Eating..." << endl;
  }
};

class Dog: public Animal {
  public: void bark() {
    cout << "Dog Barking...";
  }
};

int main(void) {
  Dog dog;
  dog.eat();
  dog.bark();
  return 0;
}
```

Output:

```c++
Eating...
Dog Barking...
```

- Multiple Inheritance (Đa kế thừa): đây là trường hợp một lớp có thể kế thừa từ nhiều hơn một lớp khác, đồng nghĩa với việc một lớp con có thể có nhiều hơn một lớp cha.

![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/Multiple-1.jpg)

```C++
#include <iostream>
using namespace std;

class Shape {
   public:
      void setWidth(int w) {
         width = w;
      }
      void setHeight(int h) {
         height = h;
      }

   protected:
      int width;
      int height;
};

class PaintCost {
   public:
      int getCost(int area) {
        return area * 70;
      }
};

class Rectangle: public Shape, public PaintCost {
   public:
      int getArea() {
		return (width * height);
      }
};

int main(void) {
   Rectangle Rect;
   int area;
   Rect.setWidth(5);
   Rect.setHeight(7);

   area = Rect.getArea();
   cout << "Total area: " << Rect.getArea() << endl;
   cout << "Total paint cost: $" << Rect.getCost(area) << endl;
   return 0;
}
```

Output:

```C++
Total area: 35
Total paint cost: $2450
```

- Multi-Level Inheritance (Kế thừa đa cấp): trong trường hợp này sẽ có một lớp kế thừa được tạo ra từ một lớp kế thừa khác.

  ![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/multilevel-inheritance.jpg)

```C++
#include <iostream>
using namespace std;

class Vehicle{
   public:
      void vehicle(){
         cout<<"I am a vehicle" << endl;
      }
};

class FourWheeler : public Vehicle{
   public:
      void fourWheeler(){
         cout<<"I have four wheels" << endl;
      }
};

class Car : public FourWheeler{
   public:
      void car(){
         cout<<"I am a car" << endl;
      }
};
int main(){
   Car obj;
   obj.car();
   obj.fourWheeler();
   obj.vehicle();
   return 0;
}
```

Output:

```C++
I am a car
I have four wheels
I am a vehicle
```

- Hierarchical Inheritance (Kế thừa phân cấp): đây là trường hợp sẽ có nhiều lớp con được kế thừa từ một lớp cha duy nhất.

  ![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/Hierarchicalgfg.jpg)

```C++
#include <iostream>
using namespace std;

class Polygon {
  protected:
    int width, height;
  public:
    void setValues (int a, int b) {
	  width=a;
	  height=b;
	}
    virtual int area (void) = 0;
};

class Rectangle: public Polygon {
  public:
    int area (void) {
		return (width * height);
	}
};

class Triangle: public Polygon {
  public:
    int area (void) {
		return (width * height / 2);
	}
};

int main () {
  Rectangle rect;
  Triangle trgl;
  rect.setValues (4,5);
  trgl.setValues (4,5);
  cout << rect.area() << endl;
  cout << trgl.area() << endl;
  return 0;
}
```

Output:

```C++
20
10
```

- Hybrid Inheritance (Kế thừa lai): hay còn được gọi là Kế thừa ảo (Virtual Inheritance). Đây là trường hợp kế thừa được kết hợp bởi nhiều hơn một loại kế thừa, chẳng hạn như kết hợp Đơn kế thừa với Đa kế thừa.

  ![This is an image](https://raw.githubusercontent.com/hieuvu98/clean-code/main/images/Hybrid.jpg)

```C++
#include <iostream>

using namespace std;

class Animals {
  public: Animals() {
    cout << "This is an animal" << endl;
  }
};

class Mammals: public Animals {
  public: Mammals() {
    cout << "This is a mammal" << endl;
  }
};

class Herbivores {
  public: Herbivores() {
    cout << "This is a herbivore" << endl;
  }
};

class Cow: public Mammals, public Herbivores {

  public: Cow() {
    cout << "A cow is a herbivore mammal" << endl;
  }

};

int main() {
  Cow c;
  return 0;
}
```

Output:

```C++
This is an animal
This is a mammal
This is a herbivore
A cow is a herbivore mammal
```

### Tính đa hình (Polymorphism)

- Tính đa hình cho phép một phương thức có các tác động khác nhau trên nhiều loại đối
  tượng khác nhau
- Với tính đa hình, nếu cùng một phương thức ứng dụng cho các đối tượng thuộc các lớp
  khác nhau thì nó đưa đến những kết quả khác nhau. Bản chất của sự việc chính là phương thức này bao gồm cùng một số lượng các tham số
- Tính đa hình trong OOP gồm có hai loại: Đa hình thời gian chạy (Runtime Polymorphism) và Đa hình thời gian biên dịch (Compile Time Polymorphism). Theo đó, tính đa hình cho phép một phương thức thực thi những hành vi khác nhau theo hai hướng: sử dụng phương thức ghi đè (method overriding) hoặc phương thức nạp chồng (method overloading).

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
