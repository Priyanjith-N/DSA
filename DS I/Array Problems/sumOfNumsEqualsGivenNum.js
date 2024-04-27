const arr = [6, 5, 7, 9, 4, 0, 2];


function numsEqualToSumOfTwoNum(arr, target){ // O(n^2)T O(1)S
    for(let i = 0; i < (arr.length - 1) ; i++){
        for(let j = (i + 1); j < arr.length ; j++){
            if((arr[i] + arr[j]) === target){
                return [arr[i], arr[j]];
            }
        }
    }
}

function betterNumsEqualToSumOfTwoNum(arr, target){ // O(n)T O(n)S
    const set = new Set();
    for(let i = 0; i < arr.length ; i++){
        const num = arr[i];
        const match = (target - num);
        if(set.has(match)){
            return [match, num];
        }

        set.add(num);
    }

    return [];
}


// console.log(numsEqualToSumOfTwoNum(arr, 10)); // O(n^2)T O(1)S

console.log(betterNumsEqualToSumOfTwoNum(arr, 10)); // O(n)T O(n)S

