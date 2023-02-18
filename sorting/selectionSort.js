function selectionSort(ar) 
{ 
    var i, j, min_index, temp ;
  
    for (i = 0; i < ar.length-1; i++)
    {
        min_index = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_index])
            min_index = j;
  
        temp=ar[min_index];
        ar[min_index]=ar[i];
        ar[i]=temp;
    } 
}