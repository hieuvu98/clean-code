// Example 1
// Định nghĩa giao diện Product
interface Transport {
  deliver(): string;
}
// Các lớp cụ thể triển khai giao diện Product
class Truck implements Transport {
  public deliver(): string {
    return "{Result of the Truck}";
  }
}

class Ship implements Transport {
  public deliver(): string {
    return "{Result of the Ship}";
  }
}

// Định nghĩa lớp Logistics và phương thức factoryMethod
abstract class Logistics {
  public abstract createTransport(): Transport;

  public planDelivery(): string {
    const product = this.createTransport();
    return `Logistics: The same creator's code has just worked with ${product.deliver()}`;
  }
}

// Các lớp ConcreteCreator triển khai factoryMethod để tạo Product tương ứng
class RoadLogistics extends Logistics {
  public createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  public createTransport(): Transport {
    return new Ship();
  }
}

function clientCode(creator: Logistics) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.planDelivery());
  // ...
}
console.log("\n============== Example 1 ==============");
console.log("App: Launched with the RoadLogistics.");
clientCode(new RoadLogistics());
console.log("");

console.log("App: Launched with the SeaLogistics.");
clientCode(new SeaLogistics());

// Example 2
// Định nghĩa lớp hình học cơ bản
interface Shape {
  draw(): string;
}

// Các lớp cụ thể triển khai giao diện Product
class Circle implements Shape {
  public draw(): string {
    return "Drawing a Circle";
  }
}

class Rectangle implements Shape {
  public draw(): string {
    return "Drawing a Rectangle";
  }
}

abstract class ShapeFactory {
  public abstract createShape(): Shape;

  public drawShape(): string {
    const product = this.createShape();
    return `${product.draw()}`;
  }
}

class RectangleFactory extends ShapeFactory {
  public createShape(): Shape {
    return new Rectangle();
  }
}

class CircleFactory extends ShapeFactory {
  public createShape(): Shape {
    return new Circle();
  }
}

console.log("\n============== Example 2 ==============");
const circleFactory: ShapeFactory = new CircleFactory();
console.log(circleFactory.drawShape());

const rectangleFactory: RectangleFactory = new RectangleFactory();
console.log(rectangleFactory.drawShape());
