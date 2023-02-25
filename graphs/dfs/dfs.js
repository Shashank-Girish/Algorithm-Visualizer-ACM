function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function DFS(graph, node) {
  var visited = new Array(graph.length).fill(false);
  var stack = [node];
  document.getElementById(`white${node}`).style.opacity=0;
  document.getElementById(`grey${node}`).style.opacity=1;
  sleep(3000);
  

  while (stack.length) {
    var current = stack.pop();
    if (!visited[current]) {
      console.log(current);
      document.getElementById(`grey${current}`).style.opacity=0;
      document.getElementById(`black${current}`).style.opacity=1;
      sleep(3000);

      visited[current] = true;
      for (var i = 0; i < graph.length; i++) {
        if (graph[current][i] && !visited[i]) {
          stack.push(i);
          document.getElementById(`white${i}`).style.opacity=0;
          document.getElementById(`grey${i}`).style.opacity=1;
          sleep(3000);
        }
      }
    }
  }
}