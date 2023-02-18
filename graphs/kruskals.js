function Kruskal(graph) {
    var edges = [];
    for (var i = 0; i < graph.length; i++) {
      for (var j = i + 1; j < graph.length; j++) {
        if (graph[i][j] !== 0) {
          edges.push([i, j, graph[i][j]]);
        }
      }
    }
  
    edges.sort((a, b) => a[2] - b[2]);
  
    var parent_node = [];
    for (var i = 0; i < graph.length; i++) {
      parent_node[i] = i;
    }
  
    function find(i) {
      if (parent_node[i] !== i) {
        parent_node[i] = find(parent_node[i]);
      }
      return parent_node[i];
    }
  
    var result = [];
    for (var i = 0; i < edges.length; i++) {
      var edge = edges[i];
      var u = edge[0];
      var v = edge[1];
      var w = edge[2];
      if (find(u) !== find(v)) {
        result.push(edge);
        parent_node[find(u)] = find(v);
      }
    }
  
    return result;
  }
  