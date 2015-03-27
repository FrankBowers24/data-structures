var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value){
  if(this.value === value){
    return;
  } else if(this.value > value){
    if(this.left === null){
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  var result = false;
  if (this.value === value) {
    result = true;
  } else if (this.value > value) {
    if (this.left !== null) {
      result = this.left.contains(value);
    }
  } else {
    if (this.right !== null) {
      result = this.right.contains(value);
    }
  }
  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
