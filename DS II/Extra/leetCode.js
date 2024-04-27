const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let total = digits.reduce((total, value) => {
        return total += String(value);
    }, '');
    total = BigInt(total) + BigInt(1);
    String(total).split('').map((value, i) => {
        digits[i] = Number(value);
    });

    return digits;
};

console.log(plusOne(digits));