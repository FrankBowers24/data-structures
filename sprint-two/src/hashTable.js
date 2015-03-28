var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);
  if(bucketList === undefined || bucketList === null){
    this._storage.set(i, [[k, v]]);
    this._count++;
    this.resizeCheck();
  } else {
    var keyFound = _.filter(bucketList, function(tuple){
      var result = tuple[0] === k;
      if(result){
        tuple[1] = v;
      }
      return result;
    }).length === 1;
    if(!keyFound){
      this._storage.set(bucketList.push([k, v]));
      this._count++;
      this.resizeCheck();
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);
  if(bucketList === undefined || bucketList === null){
    return null;
  } else {
    var result = null;
    _.each(bucketList, function(tuple){
      if(tuple[0] === k){
        result = tuple[1];
      }
    });
    return result;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);
  var index = null;
  _.each(bucketList, function(tuple, tupI){
    if(tuple[0] === k){
      index = tupI;
    }
  });
  if(index !== null){
    bucketList.splice(index, 1);
    this._storage.set(i, bucketList);
    this._count--;
    this.resizeCheck();
  }
};

HashTable.prototype.resizeCheck = function(){
  if(this._count/this._limit >= 0.75){
    this.resize(this._limit*2);
  } else if(this._count/this._limit <= 0.25){
    this.resize(this._limit/2);
  }
};

HashTable.prototype.resize = function(newLimit){
  var temp = this._storage;
  var thiz = this;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;

  temp.each(function(bucketList){
    _.each(bucketList, function(tuple){
      thiz.insert(tuple[0], tuple[1]);
    });
  });

};







/*
 * Complexity: What is the time complexity of the above functions?
 */
