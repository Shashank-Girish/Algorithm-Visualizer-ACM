function partition(arr, low, high){
    let pivot = arr[high];

    let i = low -1;

    for(let j = low; j <= high; j++){
        if(arr[j] < pivot){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return (i+1);
}
function quickSort(arr, low, high){
    if(low > high){
        return;
    }

    var pivot = partition(arr, low, high);

    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);

}