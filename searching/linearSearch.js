function linearSearch(arr, ele){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ele){
            return true;
        }
    }
    return false;
}
