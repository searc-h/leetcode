/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};















/**
 * @description  来自评论的完成思路
 * @param {*} nums 
 * @returns 
 */
var threeSum_others = function(nums) {
    if (nums.length < 3) {
      return [];
    }
    // 从小到大排序
    const arr = nums.sort((a,b) => a-b);
    // 最小值大于 0 或者 最大值小于 0，说明没有无效答案
    if (arr[0] > 0 || arr[arr.length - 1] < 0) {
      return [];
    }
    const n = arr.length;
    const res = [];
    for (let i = 0; i < n; i ++) {
      // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
      if (nums[i] > 0) {
        return res;
      }
      // 当前循环的值和上次循环的一样，就跳过，避免重复值
      if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }
      // 双指针
      let l = i + 1;
      let r = n - 1;
      while(l < r) {
        const temp = arr[i] + arr[l] + arr[r];
        if (temp > 0) {
          r --;
        }
        if (temp < 0) {
          l ++;
        }
        if (temp === 0) {
          res.push([nums[i], nums[l], nums[r]]);
          // 跳过重复值
          while(l < r && nums[l] === nums[l + 1]) {
            l ++;
          }
          // 同上
          while(l < r && nums[r] === nums[r - 1]) {
            r --;
          }
          l ++;
          r --;
        }
      }
    }
    return res;
  };