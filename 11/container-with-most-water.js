// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/container-with-most-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1

 */



/**
 * 对O(n)的算法写一下自己的理解，一开始两个指针一个指向开头一个指向结尾，
 * 此时容器的底是最大的，接下来随着指针向内移动，会造成容器的底变小，
 * 在这种情况下想要让容器盛水变多，就只有在容器的高上下功夫。 
 * 那我们该如何决策哪个指针移动呢？
 * 我们能够发现不管是左指针向右移动一位，
 * 还是右指针向左移动一位，容器的底都是一样的，都比原来减少了 1。
 * 这种情况下我们想要让指针移动后的容器面积增大，就要使移动后的容器的高尽量大，
 * 所以我们选择指针所指的高较小的那个指针进行移动，这样我们就保留了容器较高的那条边，
 * 放弃了较小的那条边，以获得有更高的边的机会。  --from 评论Alba
 */
/**
 * @description 输入数组返回最大面积
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxA = 0;
    let i = 0; // 左指针
    let j = height.length - 1; // 右指针
    
    let width = j - i;  // 宽度

    for(item in height){
        
        if(i == j){
            return maxA
        }
        width = j - i
        maxA = Math.max(maxA , width * Math.min(height[j] , height[i]))
        if(height[j] > height[i]){
            i++;
        }else j--; 
        
    }

    return maxA

};


console.log(maxArea([2,3,4,5,18,17,6]))