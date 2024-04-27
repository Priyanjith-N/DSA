function displayAllOdd(arr){
    if(arr.length <= 0){
        return;
    }

    if(arr[0] % 2 !== 0){
        console.log(arr[0]);
    }

    displayAllOdd((arr.splice(1)));
}

const arr = [1,2,3,4,5,6,7,8];

displayAllOdd(arr);