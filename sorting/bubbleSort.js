function bubbleSort(ar) 
{ 
    let i, j, keys; 
    for (i = 0; i < ar.length; i++)
    { 
          
        for(j = 0; j < ar.length - i - 1; j++)
        {
            if(ar[j] > ar[j+1])
            {
                keys = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = keys;
            }
        }
    } 
}