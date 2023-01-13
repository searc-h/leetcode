/**
 * leetcode第四题：
 * 
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    // 这里的时间复杂度就是O(n^2) 最坏清空下需要全部重新排列
    let totalArr = nums1.concat(nums2).sort((a,b)=>{
        return a-b
    })
    
   
    console.log(totalArr)
    function findMedian(nums){
        let length = nums.length
        if(length % 2 == 0){
            return( nums[length/2-1]+nums[length/2])/2
        }else return nums[(length-1)/2]
    }

    return findMedian(totalArr)
};

// console.log(findMedianSortedArrays([3],  [-2,-1]))





// -1 1 2 3 4 5 |6 7| 8 9 10 12 14 16
// [-1 , 1 ,3 ,5, 7, 9] len = 6
// [2, 4, 6, 8, 10, 12, 14, 16] len = 8
// 如果排好序，那么下标为 6，7的两个数为中位数之和

// 因此，我们只需要比较/找出 第6大，第七大的数字


var findMedianSortedArrays_Pointer = function(nums1, nums2) {

    let hashMap = [];

    let len1 = nums1.length
    let len2 = nums2.length
    let length = len1 + len2

    let midTag = Math.floor(length / 2);   // 14个数 -> 下标为7 || 13个数 -> 下标为6 
    
    let pointer1 = 0
    let pointer2 = 0

    for(var i = 0; i<=midTag ;i++ ){
        
        if(nums1[pointer1]  >  nums2[pointer2] ) {
            if(pointer2 <= len2-1){
                hashMap.push(nums2[pointer2]);
                pointer2++
            }else{
                hashMap.push(nums1[pointer1])
                pointer1++;
            }
        }
        else{
            if(pointer1 <= len1-1){
                hashMap.push(nums1[pointer1])
                pointer1++;
            }else{
                hashMap.push(nums2[pointer2]);
                pointer2++
            }
        }
    }

    if(length % 2 == 0){
       return (hashMap[hashMap.length-1]+hashMap[hashMap.length-2])/2 
       
    }else{
        return hashMap[hashMap.length-1] 
    }
}
console.log(findMedianSortedArrays_Pointer([1,2] , [3,4]))





