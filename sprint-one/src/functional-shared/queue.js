var Queue = function(){
  var obj = {};
  obj.front = 0;
  obj.back = 0;
  obj.storage = {};
  _.extend(obj,queueMethods);
  return obj;
};


var queueMethods = {
  enqueue: function(val) {
    this.storage[this.back] = val;
    this.back++;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var result = this.storage[this.front];
      this.front++;
      return result;
    }
  },
  size: function(){
    return this.back - this.front;
  }
};



