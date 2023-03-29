function sleep(ms){ 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function linearSearch(arr, ele){

    var tbl = document.getElementById('tbl'); 

    for(var i = 0; i < arr.length; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","yellow");
        await sleep(500);

        if(arr[i] == ele){

            var cel = tbl.rows[0].cells[i]; 
            cel.setAttribute("bgcolor","rgb(99,158,74)");

            return true;
        }
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","");
    }

    for(let i = 0; i <arr.length; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","red");
    }

    return false;
}
