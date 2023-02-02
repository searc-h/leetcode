/**
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

 

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    let sort = function sort(index){
        for(var j=index ;j<nums.length;j++){
        //两两比较，如果前一个比后一个大，则交换位置。
           for(var i=j+1 ; i<nums.length;i++){
                if(nums[j]>nums[i]){
                    var temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                }
            } 
        }
    }

    let len = nums.length;
    for (let i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            // 第i开始后的元素升序排序
            sort(i)

            for (let j = i; j < len; j++) {
                if (nums[j] > nums[i - 1]) {
                    let temp = nums[j];
                    nums[j] = nums[i - 1];
                    nums[i - 1] = temp;
                    console.log("nums",nums)
                    
                    return
                }
            }
        }
    }

    nums.sort((a,b)=>a-b)
    console.log(nums)
	return;  
};


nextPermutation([ 1,2,3,8,5,7,6,4])

//别人的优秀实现方案
var nextPermutation_Others = function(nums) {
    const len = nums.length;
   for(let j=len-2;j>-1;j--){ //j在前
       let k = j+1; // k在后
       if(nums[j] < nums[k]){  //先找转折点
           let i = len-1; 
           while(nums[j] >= nums[i]) i--; // 再找最小的大数 
           [nums[j],nums[i]] = [nums[i],nums[j]];  //数组解构来交换两个元素  
           //将j位置之后元素改为升序排列
           i = len-1;
           for(;k<i;k++,i--) [nums[k],nums[i]] = [nums[i],nums[k]];  //交换之后依旧是降序，所以降序->升序。直接两两交换
           return nums;
       }
   }
   return nums.reverse();
};