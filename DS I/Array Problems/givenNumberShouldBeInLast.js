const arr = [6,1,6,8,10,4,15,6,3,9,6];

function allNumberToEnd(arr, target){ // O(n)T O(1)S
    let i = 0;
    let j = arr.length - 1;

    while(i < j){
        if(arr[j] === target){
            j--;
            continue;
        }

        if(arr[i] === target){
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
            continue;
        }

        i++;
    }
    return arr;
}


console.log(allNumberToEnd(arr, 6)); // O(n)T O(1)S