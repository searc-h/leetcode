/**
 * 在一个 n * m 的二维数组中，
 * 每一行都按照从左到右 非递减 的顺序排序，
 * 每一列都按照从上到下 非递减 的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    let maxY =matrix[0].length -1;
    let maxX = matrix.length -1
    let x = 0  , y =  maxY;
    let tag = false
    while(x <= maxX && y <= maxY && x >=0 && y>=0){
        if(matrix[x][y] === target) {
            tag = true
            return tag
        }
        else {
            if(target < matrix[x][y]) {
                y -= 1
            }else{
                x += 1
            }
        }

    }

    return tag  
};

console.log(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5))
  
/**
 * 评论区思路：站在右上角看。这个矩阵其实就像是一个Binary Search Tree。然后，聪明的大家应该知道怎么做了。
 */