class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    }

    const searchTree = function (node) {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        } else if (node.left !== null) {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } else if (node.right !== null) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };

    return searchTree(node);
  }

  findMin() {
    let node = this.root;

    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  findMax() {
    let node = this.root;

    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

  isPresent(data) {
    let node = this.root;
    while (node) {
      if (node.data === data) return true;
      data < node.data ? (node = node.left) : (node = node.right);
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      // empty tree
      if (node === null) {
        return null;
      }

      // node is the target
      if (data === node.data) {
        // no children scenario (leaf)
        if (node.left === null && node.right === null) {
          return null;
        }

        // one child scenario
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        // two children scenario
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(30);
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(Math.round(Math.random() * 100));
bst.add(15);

console.log(bst);

console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(30));

console.log(bst.remove(30));
console.log(bst.isPresent(30));

console.log(bst);
