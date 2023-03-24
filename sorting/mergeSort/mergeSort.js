function merge(left, right){
    let sortedArray = [], leftIdx = 0, rightIdx = 0;

    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx] < right[rightIdx]){
            sortedArray.push(left[leftIdx]);
            leftIdx++;
        }
        else{
            sortedArray.push(right[rightIdx]);
            rightIdx++;
        }
    }

    if(leftIdx <left.length){
        return sortedArray.concat(left.slice(leftIdx));
    }
    else if(rightIdx <right.length){
        return sortedArray.concat(right.slice(rightIdx));
    }
    else{
        return unsortedArray;
    }
}

function mergeSort(unsortedArray){
    if(unsortedArray.length <= 1){
        return unsortedArray;
    }

    const mid = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, mid);
    const right = unsortedArray.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}