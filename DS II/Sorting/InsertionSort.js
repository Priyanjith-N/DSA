const arr = [23,45,12,65,76,2,2];

function insertionSort(arr){
    if(arr.length === 1){
        return arr;
    }

    for(let i = 1;i<arr.length;i++){
        const current = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }

    return arr;
}

function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<(arr.length - (1 + i));j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

function qucikSort(arr){
    return quckiSortHelper(arr, 0, arr.length - 1);
}

function quckiSortHelper(arr, startIndex, endIndex){
    if(startIndex >= endIndex){
        return;
    }

    const pivotIndex = startIndex;

    let i = startIndex + 1;
    let j = endIndex;

    while(i<=j){
        if(arr[i] <= arr[pivotIndex]){
            i++;
            continue;
        }

        if(arr[j] >= arr[pivotIndex]){
            j--;
            continue;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]];

    quckiSortHelper(arr, startIndex, j - 1);
    quckiSortHelper(arr, j + 1, endIndex);

    return arr;
}

function selectionSort(arr){
    for(let i = 0;i<arr.length - 1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const middleIndex = Math.floor((arr.length - 1) / 2);

    const firstHalf = arr.slice(0, middleIndex + 1);
    const lastHalf = arr.slice(middleIndex + 1, arr.length);

    return join(mergeSort(firstHalf), mergeSort(lastHalf));
}

function join(firstHalf, lastHalf){
    const mergedArr = [];

    let i = j = 0;

    while(i<firstHalf.length && j<lastHalf.length){
        if(firstHalf[i] < lastHalf[j]){
            mergedArr.push(firstHalf[i++]);
        }else{
            mergedArr.push(lastHalf[j++]);
        }
    }

    while(i<firstHalf.length){
        mergedArr.push(firstHalf[i++]);
    }

    while(j<lastHalf.length){
        mergedArr.push(lastHalf[j++]);
    }

    return mergedArr;
}

// console.log(insertionSort(arr)); // O(n^2)T O(1)S

// console.log(bubbleSort(arr)); // O(n^2)T O(1)S

// console.log(qucikSort(arr)); // O(nlog(n))T O(log(n))S

// console.log(selectionSort(arr)); // O(n^2)T O(1)S

// console.log(mergeSort(arr)); // O(nlog(n))TS