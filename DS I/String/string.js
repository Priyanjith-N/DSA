function encrypt(data, key){
    data = data.toLowerCase();
    let newData = '';

    for(let i = 0; i < data.length ; i++){
        const x = data[i].charCodeAt();
        if(x < 97 || x > 122){
            newData += data[i];
            continue;
        }
        if((x + (key % 26)) <= 122){
            newData += String.fromCharCode((x + (key % 26)));
        }else{
            newData += String.fromCharCode((96 + ((x + (key % 26)) - 122)));
        }
    }

    return newData;
}

function decrypt(data, key){
    data = data.toLowerCase();
    let newData = '';

    for(let i = 0; i < data.length ; i++){
        const x = data[i].charCodeAt();
        if(x < 97 || x > 122){
            newData += data[i];
            continue;
        }
        if((x - (key % 26)) >= 97){
            newData += String.fromCharCode((x - (key % 26)));
        }else{
            newData += String.fromCharCode((123 - (97 - (x - (key % 26)))));
        }
    }

    return newData;
}

const str = 'hello guys';

const encryptedMessage = encrypt(str, 30);

console.log(encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage, 30);

console.log(decryptedMessage);