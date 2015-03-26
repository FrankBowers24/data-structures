var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    if(this.head === null){
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  };

  list.removeHead = function(){
    if(this.head === null){
      return null;
    } else {
      var result = this.head;
      this.head = this.head.next;
      return result.value;
    }
  };

  list.contains = function(target){
    if(this.head !== null){
      var current;
      do {
        current = current === undefined ? this.head : current.next;
        if(current.value === target){
          return true;
        }
      } while(current.next !== null);
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
