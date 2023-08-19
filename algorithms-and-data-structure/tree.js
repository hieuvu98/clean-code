class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return true;
    } else {
      let currentParent = this.root;
      while (currentParent) {
        if (value === currentParent.value) return undefined;
        if (value < currentParent.value) {
          if (currentParent.left) {
            currentParent = currentParent.left;
          } else {
            currentParent.left = newNode;
            return this;
          }
        } else if (value > currentParent.value) {
          if (currentParent.right) {
            currentParent = currentParent.right;
          } else {
            currentParent.right = newNode;
            return this;
          }
        }
      }
      // while (tempRoot) {
      //   if (newNode.value === tempRoot.value) return undefined;
      //   parentNode = tempRoot;
      //   if (tempRoot.value > newNode.value) {
      //     tempRoot = tempRoot.left;
      //   } else {
      //     tempRoot = tempRoot.right;
      //   }
      // }
      // if (parentNode) {
      //   if (parentNode.value > newNode.value) {
      //     parentNode.left = newNode;
      //   } else {
      //     parentNode.right = newNode;
      //   }
      // }
    }
  }

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinaryTree();
tree.insert(40);
tree.insert(5);
tree.insert(45);
tree.insert(35);
tree.insert(56);
tree.insert(15);
tree.insert(13);
tree.insert(16);
tree.insert(48);
tree.insert(47);
tree.insert(49);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
