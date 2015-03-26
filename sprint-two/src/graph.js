

var Graph = function(){
  this.storage = {};
  this.nextIndex = 0;
};

var GraphNode = function(value, index)
{
  this.graphIndex = index;
  this.value = value;
  this.edges = {};
};

Graph.prototype.addNode = function(nodeValue){
  this.storage[this.nextIndex] = new GraphNode(nodeValue, this.nextIndex);
  this.nextIndex++;
};

Graph.prototype.contains = function(nodeValue){
  return this.findNodeIndex(nodeValue) !== null;
};

Graph.prototype.findNodeIndex = function(nodeValue){
  var graphIndex = null;
  _.each(this.storage, function(node){
    if(!graphIndex){
      if(node.value === nodeValue){
        graphIndex = node.graphIndex;
      }
    }
  });
  return graphIndex;
};

Graph.prototype.removeNode = function(nodeValue){
  var node = this.storage[this.findNodeIndex(nodeValue)];
  if(node !== null){
    _.each(node.edges, function(edgeNode){
      delete(edgeNode.edges[node.graphIndex]);
    });
    delete(this.storage[node.graphIndex]);
  }
};

Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue){
  var fromIndex = this.findNodeIndex(fromNodeValue);
  var result = false;
  if(fromIndex !== null){
    _.each(this.storage[fromIndex].edges, function(nodeValue){
      if(!result){ result = nodeValue === toNodeValue; }
    });
  }
  return result;
};

Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.storage[this.findNodeIndex(fromNodeValue)];
  var toNode = this.storage[this.findNodeIndex(toNodeValue)];
  if(fromNode !== undefined && toNode !== undefined){
    fromNode.edges[toNode.graphIndex] = toNode.value;
    toNode.edges[fromNode.graphIndex] = fromNode.value;
  }
};

Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.storage[this.findNodeIndex(fromNodeValue)];
  var toNode = this.storage[this.findNodeIndex(toNodeValue)];
  if(fromNode !== undefined && toNode !== undefined){
    delete(fromNode.edges[toNode.graphIndex]);
    delete(toNode.edges[fromNode.graphIndex]);
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(node){
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



