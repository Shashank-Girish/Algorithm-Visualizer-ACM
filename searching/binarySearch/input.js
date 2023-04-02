var i = 0;
var arr = Array();
var ele;

function Add(){
    // document.getElementById("Display").innerHTML="The given Array   : ";
    // arr[i] = document.getElementById("input").value;
    // i++;
    // document.getElementById("input").value="";

    const inputArray = document.getElementById("input").value;
    arr = inputArray.split(",").map(Number);    
    ele = document.getElementById("Search").value;
    document.getElementById("Display").innerHTML+="The given Array :    ";
    document.getElementById("Display").innerHTML+=arr;
    document.getElementById("Display").innerHTML+="<br> The Element to be searched for: ";
    document.getElementById("Display").innerHTML+=ele;
    console.log(arr);
}