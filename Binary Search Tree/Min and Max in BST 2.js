var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMin = function() {
  let curr = this.root
  if (!curr) {
    return null;
  }
  while(curr.left) {
    curr = curr.left
  }
  return curr.value
  }
  this.findMax = function() {
    let curr = this.root
    if (!curr) {
    return null;
  }
    while(curr.right) {
        curr = curr.right;
    }
    return curr.value;
  }
  // Only change code above this line
}