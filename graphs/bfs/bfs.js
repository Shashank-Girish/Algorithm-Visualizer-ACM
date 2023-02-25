function BFS(graph, node){
    var visited = new Array(graph.length).fill(false);
    var queue = [node];
    //image- "$node

    while(queue.length){
        var current = queue.shift();

        if(!visited[current]){
            console.log(current);
            visited[current] = true;

            for(var i = 0; i < graph.length; i++){
                if(graph[current][i] && !visited[i]){
                    queue.push(i);
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