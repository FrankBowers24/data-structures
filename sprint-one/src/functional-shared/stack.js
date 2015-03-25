var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.sizeOf = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {

  push:function(value){
    this.storage[this.sizeOf++] = value;
  },

  pop: function(){
    if (this.sizeOf > 0) {
      return this.storage[--this.sizeOf];
    }
  },

  size: function(){
    return this.sizeOf;
  }
};


