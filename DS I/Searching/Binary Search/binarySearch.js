function binaryIter(arr, target){
    let startIndex = 0;
    let endIndex = (arr.length - 1);

    while(startIndex <= endIndex){
        const midIndex = startIndex + ((endIndex - startIndex) / 2);
        if(arr[midIndex] === target){
            return target;
        }

        if(arr[midIndex] > target){
            endIndex = midIndex - 1;
        }else{
            startIndex = midIndex + 1;
        }
    }

    return -1;
}

function binarySearchHelper(arr, target, left, right){
    const midPos = left + ((right - left) / 2);

    if(arr[midPos] === target){
        return target;
    }

    if(left > right){
        return -1;
    }

    if(arr[midPos] > target){
        return binarySearchHelper(arr, target, left, midPos - 1);
    }else{
        return binarySearchHelper(arr, target, midPos + 1, right);
    }

}

function binarySearch(arr, target){
    return binarySearchHelper(arr, target, 0, arr.length - 1);
}

const arr = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(arr,5));