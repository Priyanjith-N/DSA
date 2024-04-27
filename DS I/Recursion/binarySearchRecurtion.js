function isPallendromHelper(str, i, j){
    if(i > j){
        return true;
    }

    if(str[i] !== str[j]){
        return false;
    }

    return isPallendromHelper(str, (i+1), (j-1));
}


function isPallendrom(str){
    if(!str || str.length === 0){
        return ;
    }

    return isPallendromHelper(str, 0, str.length - 1);
    
}

const str = '';

console.log(isPallendrom(str));