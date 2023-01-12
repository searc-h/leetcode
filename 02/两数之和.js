/**
 * @description 找出数组两数之和等目标数字的下标
 * @param {*} nums  数组
 * @param {*} target 目标数字
 * @returns 
 */
// leetcode 第一道简单题
function twoSum(nums, target) {
    let hashMap  = {} ;
    let findArr = [];

    nums.find((item, index) => {
        if( hashMap[target - item] != undefined ){
            findArr.push(hashMap[target - item])
            findArr.push(index)
            return true
        }
        else {
            hashMap[item] = index ;
            return false
        }
    })
    return findArr
};

console.log(twoSum([2,7,11,15] , 9))