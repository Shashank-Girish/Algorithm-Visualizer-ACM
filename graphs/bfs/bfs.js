function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function BFS(graph, node){
    var visited = new Array(graph.length).fill(false);
    var queue = [node];
    document.getElementById(`white${node}`).style.display= 'none';
    document.getElementById(`grey${node}`).style.display='block';
    await sleep(2000);

    while(queue.length){
        var current = queue.shift();

        if(!visited[current])
        {
            console.log(current);
            document.getElementById(`grey${current}`).style.display='none';
            document.getElementById(`black${current}`).style.display='block';
            await sleep(2000);
            visited[current] = true;

            for(var i = 0; i < graph.length; i++){
                if(graph[current][i] == !visited[i]){
                    queue.push(i);
                    document.getElementById(`white${i}`).style.display='none';
                    document.getElementById(`grey${i}`).style.display='block';
                    await sleep(2000);
                }
            }
        }
    }
}

// var graph = [ [false, true, true, false, false],
//           [true, false, true, true, false],
//           [true, true, false, false, false],
//           [false, true, false, false, false],
//           [false, false, false, false, false] ];

// BFS(graph, 4 );