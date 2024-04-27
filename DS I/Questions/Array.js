function sortArrayOddEven(arr){
    if(arr.length === 0){
        return console.log('empty');
    }

    let status = (arr[0] % 2 === 0);

    for(let i = 1; i<arr.length-1;i++){
        if((status && (arr[i]%2 !== 0)) || (!status && (arr[i]%2 === 0))){
            status = (arr[i] % 2 === 0);
            continue;
        }
        for(let j = i+1;j<arr.length;j++){
            if((status && (arr[j] % 2 === 0)) || (!status && (arr[j] % 2 !== 0))){
                continue;
            }
            [arr[i], arr[j]] = [arr[j], arr[i]];
            status = (arr[i] % 2 === 0);
            break;
        }
    }

    return;
}

const arr = [8,4,12,5,0,9,7,2,2,3,4,4,5];

sortArrayOddEven(arr);

console.log(arr);