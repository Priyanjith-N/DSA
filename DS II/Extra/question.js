const arr = [100,50,120,140,132,1000];

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const middelIndex = Math.floor(((arr.length - 1)/2));

    const firstHalf = arr.slice(0, middelIndex + 1);
    const lastHalf = arr.slice((middelIndex + 1), arr.length);

    return join(mergeSort(firstHalf), mergeSort(lastHalf));
}

function join(firstHalf, lastHalf){
    const newArry = [];
    let i = j = 0;

    while((i < firstHalf.length) && (j < lastHalf.length)){
        if(firstHalf[i] >= lastHalf[j]){
            newArry.push(lastHalf[j++]);
        }else{
            newArry.push(firstHalf[i++]);
        }
    }

    while(i < firstHalf.length){
        newArry.push(firstHalf[i++]);
    }

    
    while(j < lastHalf.length){
        newArry.push(lastHalf[j++]);
    }

    return newArry;
}


const newArry = mergeSort(arr);

console.log(newArry);