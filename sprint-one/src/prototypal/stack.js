var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.sizeOf = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push: function(val){
    this.storage[this.sizeOf] = val;
    this.sizeOf++;
  },
  pop: function() {
    if (this.sizeOf >= 1) {
      this.sizeOf--;
      return this.storage[this.sizeOf];
    }
  },
  size: function() {
    return this.sizeOf;
  }
};


