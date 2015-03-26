

var Graph = function(){
  this.storage = {};
  this.nextIndex = 0;
};

var GraphNode = function(value)
{
  this.value = value;
  this.edges = {};
  this.nextEdgeIndex = 0;
}

Graph.prototype.addNode = function(nodeValue){
  this.storage[this.nextIndex++] = new GraphNode(nodeValue);
};

Graph.prototype.contains = function(nodeValue){
  var result = false;
  _.each(this.storage, function(node){
    if(!result){ result = node.value === nodeValue; }
  });
  return result;
};

Graph.prototype.removeNode = function(nodeValue){
};

Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue){
};

Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
};

Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



