function binarySearch(arr, ele){
    var low = 0;
    var high = arr.length-1;

    while(low < high){
        var mid = Math.floor(((high + low)/2));

        if(arr[mid] == ele){
            return true;
        }
        else if(arr[mid] > ele){
            high = mid - 1;
        }       
        else{
            low = mid + 1;
        }
    }
    return false;
}
