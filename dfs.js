function DFS(graph, node) {
  var visited = new Array(graph.length).fill(false);
  var stack = [node];

  while (stack.length) {
    var current = stack.pop();
    if (!visited[current]) {
      console.log(current);
      visited[current] = true;
      for (var i = 0; i < graph.length; i++) {
        if (graph[current][i] && !visited[i]) {
          stack.push(i);
        }
      }
    }
  }
}