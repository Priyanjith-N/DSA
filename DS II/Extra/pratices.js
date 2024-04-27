const arr = [34,22,67,23,1,2,9,54];


function evenNums(arr){
    evenNumsHelper(arr, 0);
}

function evenNumsHelper(arr, index){
    if(index === arr.length){
        return;
    }

    evenNumsHelper(arr, (index + 1));

    if(arr[index]%2 === 0){
        console.log(arr[index]);
    } 
}

function primeNums(arr){
    primeNumsHelper(arr, 0)
}

function primeNumsHelper(arr, index){
    if(arr.length === index){
        return;
    }

    let flage = true;

    for(let i = 2;i<= (arr[index]/2);i++){
        if(arr[index]%i === 0){
            return primeNumsHelper(arr, (index + 1));
        }
    }

    primeNumsHelper(arr, (index + 1));

    if(arr[index] !== 0 && arr[index] != 1){
        console.log(arr[index]);
    } 
}

function printArrInReverse(arr){
    printArrInReverseHelper(arr, 0);
}

function printArrInReverseHelper(arr, index){
    if(arr.length === index){
        return;
    }

    printArrInReverseHelper(arr, index + 1);

    console.log(arr[index]);
}

// evenNums(arr);

// primeNums(arr);

printArrInReverse(arr);

