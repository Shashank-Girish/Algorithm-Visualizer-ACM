function bellmanFord(graph, start) {
  const distances = Array(graph.length).fill(Infinity);
  distances[start] = 0;
  for (let i = 0; i < graph.length - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      for (let k = 0; k < graph[j].length; k++) {
        if (graph[j][k] !== 0 && distances[j] !== Infinity && distances[j] + graph[j][k] < distances[k]) {
          distances[k] = distances[j] + graph[j][k];
        }
      }
    }
  }
 
  for (let j = 0; j < graph.length; j++) {
    for (let k = 0; k < graph[j].length; k++) {
      if (graph[j][k] !== 0 && distances[j] !== Infinity && distances[j] + graph[j][k] < distances[k]) {
        throw new Error("Graph contains a negative cycle");
      }
    }
  }
  return distances;
}

