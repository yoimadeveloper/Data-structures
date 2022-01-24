var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.remove = function(data) {
    var removeNode = function(node, data) {
      if (node === null) {
        return null;
      }
      if (node.value === data) {
        if (node.left === null && node.right === null) return null;
      }
      if (data < node.value) {
        node.left = removeNode(node.left, data);
        return node
      }
      if (data > node.value) {
        node.right = removeNode(node.right, data);
        return node
      }
    }
    this.root = removeNode(this.root, data)
    return this.root;
  }
}