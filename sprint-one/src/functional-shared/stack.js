var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.size = 0;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;
  return obj;
};

var stackMethods = {

  push:function(value){
    this.storage[this.size++] = value;
  },

  pop: function(){
    if (this.size > 0) {
      return this.storage[--this.size];
    }
  },

  size: function(){
    return this.size;
  }
};


