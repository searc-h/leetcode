/**
 * 
整数数组 nums 按升序排列，数组中的值 互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

    if(nums.length == 0) return -1
    if(nums.length == 1) return nums[0]===target?0:-1

    // 找到旋转点
    let i = 0 ;
    while(nums[i] < nums[i + 1]) i++
    // 根据旋转点的附近大小来判断是否存在
    if(nums[i + 1] > target) return -1
    if(nums[i] < target) return -1

    // 左边部分
    let index =  BinarySearch(nums.slice(0,i+1)  , target)
    if(index != -1) return index
    
    // 右边部分
    index = BinarySearch(nums.slice(i+1),target)
    if(index != -1) return index + 1

    return -1
     
};
console.log(search([4,5,6,7,0,1,2],0))

function BinarySearch(A,  X){
    console.log(A , X)
    let mid, right, left;
    right = A.length - 1;
    left = 0;
    if(A[left] > X) return -1
    if(A[right] < X) return -1
    
    while(left <= right){           // 不断更新左右边界的索引（实质是每次循环将待查元素减半，实现了O(logN)时间复杂度），直到左索引大于右索引
        mid = Math.floor((right + left)/2);
        if(A[mid] > X)
            right = mid-1;
        else if(A[mid] < X)
            left = mid+1;
        else
            return mid;
    }
    return -1;
}