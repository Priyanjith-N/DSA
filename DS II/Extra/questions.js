/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    for(let i = 0;i<nums1.length;i++){
        let status = true;
        for(let j = 0;j<nums2.length;j++){
            if((nums1[i] === nums2[j]) && (j < nums2.length)){
                for(let k = j + 1; k < nums2.length;k++){
                    if(nums2[k] > nums1[i]){
                        status = false;
                        stack.push(nums2[k]);
                        break;
                    }
                }
                break;
            }
        }
        if(status){
            stack.push(-1);
        }
    }
    return stack;
};


const nums1 = [1,3,5,2,4];
const nums2 = [6,5,4,3,2,1,7];

console.log(nextGreaterElement(nums1,nums2));