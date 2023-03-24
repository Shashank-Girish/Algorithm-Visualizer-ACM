function sleep(ms){ 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function insertionSort(ar) 
{ 
    var tbl = document.getElementById('tbl');

    let i, j, keys; 
    
    for (i = 1; i < ar.length; i++)
    {
        keys = ar[i]; 
        j = i - 1; 
   
        while (j >= 0 && ar[j] > keys)
        { 
            var cel = tbl.rows[0].cells[j+1]; 
            cel.setAttribute("bgcolor","yellow");

            ar[j + 1] = ar[j];

            tbl.rows[0].cells[j+1].innerHTML = ar[j+1];
            await sleep(1250);

            var cel = tbl.rows[0].cells[j+1]; 
            cel.setAttribute("bgcolor","white");

            j = j - 1; 
        } 

        var cel = tbl.rows[0].cells[j+1]; 
        cel.setAttribute("bgcolor","orange");

        ar[j + 1] = keys; 

        tbl.rows[0].cells[j+1].innerHTML = ar[j+1];

        await sleep(2000);

        var cel = tbl.rows[0].cells[j+1]; 
        cel.setAttribute("bgcolor","white");
    }

    var cel = tbl.rows[0].cells; 
    cel.setAttribute("bgcolor","green");
}