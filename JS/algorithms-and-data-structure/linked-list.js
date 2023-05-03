class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printf() {
    let current = this.head;
    if (!current) {
      console.log("The list is empty");
      return;
    }
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      console.log("The list is empty");
      return null;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  }

  shift() {
    if (!this.head) {
      console.log("The list is empty");
      return null;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SingleLinkedList();
list.push("First");
list.push("Second");
list.push("Three");
list.push("Four");
console.log("List: ");
list.printf();
list.shift();
list.shift();
list.unshift("Six");
list.unshift("Seven");
console.log("List: ");
list.printf();
