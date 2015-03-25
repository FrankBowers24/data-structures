var Stack = function() {
  this.sizeOf = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.storage[this.sizeOf++] = val;
}

Stack.prototype.pop = function() {
  if (this.sizeOf > 0) {
    return this.storage[--this.sizeOf];
  }
}

Stack.prototype.size = function() {
  return this.sizeOf;
}


