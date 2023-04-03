function dijkstra(graph, start) {
  const distances = Array(graph.length).fill(Infinity);
  distances[start] = 0;
  const visited = Array(graph.length).fill(false);
  for (let i = 0; i < graph.length - 1; i++) {
    generateTable(distances);
    console.log(graph.length)
    const minDistance = Math.min(...distances.filter((dist, idx) => !visited[idx]));
    const minIndex = distances.findIndex((dist, idx) => dist === minDistance && !visited[idx]);
    visited[minIndex] = true;
    for (let j = 0; j < graph[minIndex].length; j++) {
      if (graph[minIndex][j] !== 0 && !visited[j] && distances[minIndex] + graph[minIndex][j] < distances[j]) {
         distances[j] = distances[minIndex] + graph[minIndex][j];
      }
    }
  }
  return distances;
}

function showGraph(){
  for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
      if(i!=j){
        //console.log(document.getElementById(`${i}${j}`).value);
        if(document.getElementById(`${i}${j}`).value!=0){
          document.getElementById(`arrow${i}${j}`).style.display='block';
        }
      }
    }
  }
}

function getGraph(){
  graph=[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ]
  for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
      if(i!=j){
        if(document.getElementById(`${i}${j}`).value!==0){
          graph[i][j]=Number(document.getElementById(`${i}${j}`).value);
        }
      }
    }
  }
  return graph;
}

function generateTable(arr){

  // console.log(arr);

  var div = document.createElement("div");
  div.setAttribute("class","algo-container");

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tbl.setAttribute("class","table");

  var row = document.createElement("tr");

  for(let j = 0; j < arr.length; j++){

     // console.log(arr[j]);

      const cell = document.createElement("td");
      const cellText = document.createTextNode(arr[j]);
      cell.appendChild(cellText);
      cell.setAttribute("height","100px");
      cell.setAttribute("width","100px");
      cell.setAttribute("text-align","centre");
      cell.setAttribute("vertical-align","middle");
      cell.setAttribute("font-size","100px");
      row.appendChild(cell);
  }

  tblBody.appendChild(row);

  tbl.appendChild(tblBody);

  document.body.appendChild(tbl);

  tbl.setAttribute("border", "2");
  tbl.setAttribute("id","tbl");

  
  
}