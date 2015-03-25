var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.front = 0;
  obj.back = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.back++] = val;
  },
  dequeue: function() {
    if (this.size() >= 1) {
      return this.storage[this.front++];
    }
  },
  size: function() {
    return this.back - this.front;
  }
};


