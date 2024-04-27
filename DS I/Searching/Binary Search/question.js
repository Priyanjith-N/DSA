function binarySearch(arr, target){
    let left = 0;
    let right = arr?.length - 1;

    if(right === 0){
        return 'empty array';
    }

    while(left <= right){
        const mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return -1;
}


const arr = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(arr, 2323));