/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 */
/**
 * @desc 数组记录
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    const odd = []
    const even = []


    nums.forEach(item=>{
        if(item % 2) odd.push(item)
        else even.push(item)
    })

    return odd.concat(even)
};


/**
 * @desc 数组记录
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
   
     let left = -1,
         right = nums.length ;
     
         function plusLiftFindEven() {
            for (; left<nums.length; left++){
               if(nums[left] % 2 === 0) return nums[left]
             }
             return undefined
        }
   
        function descRightFindOdd() {
           for (; right>=0; right--){
               if(nums[right] % 2) return nums[right]
            }
            return undefined
        }
     
    
     while (left <= right) {
         let lEvent = plusLiftFindEven()
         
         let ROdd = descRightFindOdd()
        if(left > right) break
         nums[left] = ROdd,
        nums[right] = lEvent
         console.log(nums)
     }
     

     return nums
     
};
console.log(exchange([1,3,5,2]))

