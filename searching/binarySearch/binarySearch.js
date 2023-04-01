function sleep(ms){ 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function bubbleSort(ar) 
{ 
    var tbl = document.getElementById('tbl');

    let i, j, keys; 
    for (i = 0; i < ar.length; i++)
    { 
          
        for(j = 0; j < ar.length - i - 1; j++)
        {
            var cell = tbl.rows[0].cells[j]; 
            cell.setAttribute("bgcolor","yellow");

            var cell = tbl.rows[0].cells[j+1]; 
            cell.setAttribute("bgcolor","yellow");

            await sleep(200);



            if(ar[j] > ar[j+1])
            {
                var cell = tbl.rows[0].cells[j]; 
                cell.setAttribute("bgcolor","orange");

                var cell = tbl.rows[0].cells[j+1]; 
                cell.setAttribute("bgcolor","orange");
    
                keys = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = keys;

                tbl.rows[0].cells[j].innerHTML = ar[j];
                tbl.rows[0].cells[j + 1].innerHTML = ar[j + 1];

                await sleep(200);
            }

            var cell = tbl.rows[0].cells[j]; 
            cell.setAttribute("bgcolor","");

            var cell = tbl.rows[0].cells[j+1]; 
            cell.setAttribute("bgcolor","");

        }

        var cell = tbl.rows[0].cells[j]; 
        cell.setAttribute("bgcolor","rgb(99,158,74)");
    }
    var cell = tbl.rows[0].cells[0]; 
    cell.setAttribute("bgcolor","rgb(99,158,74)");

    for(var k = 0; k < ar.length; k++){
        var cell = tbl.rows[0].cells[k]; 
        cell.setAttribute("bgcolor","");
    }

}

async function binarySearch(arr, ele){
    await bubbleSort(arr);
    var low = 0;
    var high = arr.length-1;
    var tbl = document.getElementById('tbl');

    while(low < high){
        var mid = Math.ceil(((high + low)/2));

        var cell = tbl.rows[0].cells[mid]; 
        cell.setAttribute("bgcolor","orange");
        await sleep(1000);

        if(arr[mid] == ele){
            var cell = tbl.rows[0].cells[mid]; 
            cell.setAttribute("bgcolor","green");

            return true;
        }
        else if(arr[mid] > ele){
            for(var i = mid; i <= high; i++){
                var cell = tbl.rows[0].cells[i]; 
                cell.setAttribute("bgcolor","grey");
                
                
            }
            await sleep(750);
            high = mid - 1;
        }       
        else{
            for(var i = 0; i <= mid; i++){
                var cell = tbl.rows[0].cells[i]; 
                cell.setAttribute("bgcolor","grey");
                
            }
            await sleep(750);
            low = mid + 1;
        }
    }
    return false;
}
