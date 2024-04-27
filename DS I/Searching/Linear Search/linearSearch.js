function findIndex(arr, target){
    if(arr.length === 0){
        return 'empty array';
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target){
            return i;
        }
    }

    return -1;
}

function allOddNums(arr){
    const oddArr = [];

    if(arr.length === 0){
        return 'empty array';
    }

    for(let i = 0;i<arr.length;i++){
        if((arr[i] % 2) !== 0){
            oddArr.push(arr[i]);
        }
    }

    return oddArr;
}

function getAllDivisiable(arr, k){
    const divisiable = [];

    if(arr.length === 0){
        return 'empty array';
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % k === 0){
            divisiable.push(arr[i]);
        }
    }

    return divisiable;
}

const arr = [34,5,54,656,76];

console.log(getAllDivisiable(arr, 2));