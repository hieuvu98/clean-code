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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let nodePrev = this.get(index - 1);
    let nodeTemp = nodePrev.next;
    nodePrev.next = newNode;
    newNode.next = nodeTemp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let nodePrev = this.get(index - 1);
    let nodeRemoved = nodePrev.next;
    nodePrev.next = nodeRemoved;
    this.length--;
    return true;
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

  reverse() {
    let nodeHead = this.head;
    this.head = this.tail;
    this.tail = nodeHead;
    let nextNode = null;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = nodeHead.next;
      nodeHead.next = prevNode;
      prevNode = nodeHead;
      nodeHead = nextNode;
    }
    return this;
  }
}

let list = new SingleLinkedList();
list.push("First");
list.push("Second");
list.push("Three");
list.push("Four");
list.reverse();
console.log("List: ", list);
