class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, currentNode;
    if (index < this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let nodeRemoved = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeRemoved.prev;
      this.tail.next = null;
      this.tail.prev = null;
      nodeRemoved.prev = null;
    }
    this.length--;
    return nodeRemoved;
  }

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removedNode.next.prev = null;
      this.head = removedNode.next;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return this.push(val);
    let newNode = this.get(index);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    let temp = null;
    let current = this.head;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp !== null) {
      this.head = temp.prev;
    }
    return this;
  }
}

let list = new DoublyLinkedList();
list.push("First");
list.push("Second");
list.push("Three");
list.push("Four");
list.unshift("More Node");
console.log("List: ", list);
