function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<(arr.length - (1 + i));j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

const arr = [1,3,2,51,46,4,100,12,21];

const newArr = bubbleSort(arr);

console.log(newArr);