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
    const newArr = [];
    let i = j = k = 0;

    while(i < firstHalf.length && j < lastHalf.length){
        if(firstHalf[i] <= lastHalf[j]){
            newArr[k++] = firstHalf[i++];
        }else{
            newArr[k++] = lastHalf[j++];
        }
    }

    while(i < firstHalf.length){
        newArr[k++] = firstHalf[i++];
    }

    while(j < lastHalf.length){
        newArr[k++] = lastHalf[j++];
    }

    return newArr;
}

const arr = [30,2,41,56,12,11,22,42];

const newArr = mergeSort(arr);

console.log(newArr);