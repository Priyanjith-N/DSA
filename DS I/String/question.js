function convertString(str){
    let count = 0;
    let prev = str[0];
    let newData = '';

    for(let i = 0;i<str.length;i++){
        if(prev === str[i]){
            count++;
        }else{
            newData += `${count}${prev}`;
            prev = str[i];
            count = 1;
        }
    }
    newData += `${count}${prev}`;
    return newData;
}

const str = 'AAABBC';

console.log(convertString(str));