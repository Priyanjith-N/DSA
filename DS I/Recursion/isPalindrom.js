function isPalindromHelper(str, i, j){
    if(i > j){
        return true;
    }

    if(str[i] !== str[j]){
        return false;
    }

    return isPalindromHelper(str, (i+1), (j - 1));
}

function isPalindrom(str){
    str = str.toLowerCase();
    if(str.length === 1){
        return true;
    }
    return isPalindromHelper(str, 0, (str.length - 1));
}

const word = "Malayalam";
console.log(isPalindrom(word));