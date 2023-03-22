function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function DFS(graph, node) {
  var visited = new Array(graph.length).fill(false);
  var stack = [node];
  document.getElementById(`white${node}`).style.display= 'none';
  document.getElementById(`grey${node}`).style.display='block';
  await sleep(1000);
  

  while (stack.length) {
    var current = stack.pop();
    if (!visited[current]) {
      console.log(current);
      document.getElementById(`grey${current}`).style.display='none';
      document.getElementById(`black${current}`).style.display='block';
      await sleep(1000);

      visited[current] = true;
      for (var i = 0; i < graph.length; i++) {
        if (graph[current][i] && !visited[i]) {
          stack.push(i);
          document.getElementById(`white${i}`).style.display='none';
          document.getElementById(`grey${i}`).style.display='block';
          await sleep(1000);
        }
      }
    }
  }
}

function showGraph(){
  for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
      if(i!=j){
        if(document.getElementById(`${i}${j}`).checked){
          document.getElementById(`arrow${i}${j}`).style.display='block';
        }
      }
    }
  }
}