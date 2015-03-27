var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);
  if(bucketList === undefined || bucketList === null){
    this._storage.set(i, [[k, v]]);
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
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
