function insertionSort(ar) 
{ 
    let i, j, keys; 
    for (i = 1; i < ar.length; i++)
    { 
        keys = ar[i]; 
        j = i - 1; 
   
        while (j >= 0 && ar[j] > keys)
        { 
            ar[j + 1] = ar[j]; 
            j = j - 1; 
        } 
        ar[j + 1] = keys; 
    } 
}