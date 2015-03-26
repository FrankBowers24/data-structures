var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else {
    var result = false;
    _.each(this.children, function(child){
      if(!result){ result = child.contains(target); }
    })
    return result;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
