function qucikSort(arr){
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
}

function quickSortHelper(arr, startIndex, endIndex){
    if(startIndex >= endIndex){
        return;
    }

    const pivotIndex = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = endIndex;

    while(leftIndex <= rightIndex){
        if(arr[leftIndex] <= arr[pivotIndex]){
            leftIndex++;
            continue;
        }

        if(arr[rightIndex] >= arr[pivotIndex]){
            rightIndex--;
            continue;
        }

        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];    
        leftIndex++;
        rightIndex--;
    }

    [arr[pivotIndex], arr[rightIndex]] = [arr[rightIndex], arr[pivotIndex]];

    quickSortHelper(arr, startIndex + 1, rightIndex - 1);
    quickSortHelper(arr, rightIndex+1, endIndex); 
}

const arr = [23,2,45,12,65,76,2,2];

qucikSort(arr);

console.log(arr);