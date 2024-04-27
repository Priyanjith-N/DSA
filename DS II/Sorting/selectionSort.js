function selectionSort(arr){
    for(let i = 0;i<arr.length - 1;i++){
        for(let j = i + 1; j<arr.length;j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}

const arr = [32,41,4,32,3,64,22,10];

const newArr = selectionSort(arr);

console.log(newArr);