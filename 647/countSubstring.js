/**
 * 这是leetcode647题，回文子串
 * 
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/palindromic-substrings
 */

/**
 * @description 动态规划求解  1.通过局部最优解得出全局最优解  2.每一个问题规模的解都可以用相同的方式求得
 * @param {string} s
 * @return {number}
 */
 var countSubstrings_Palindrome = function(s) {

    if(s.trim()==""){
        return new Error("输入错误")
    }

    let boolArr = new Array(s.length).fill(false) // 一维数组

    boolArr =  boolArr.map(item=>{  // 二维数组： 若s[i]到s[j]是回文字符串，则boolArr[i][j] = true，否则为false
        return new Array(s.length).fill(false)
    })

    let total = 0


    for(let j = 0; j < s.length ; j++){
        for(let i = 0 ; i <= j ; i++){

            if(s[i] === s[j] && ( j - i < 2 || boolArr[i+1][j-1] )){ // 状态转移方程
                boolArr[i][j] = true
                total++ ;
            }
        }
    }
    
    return total
};

console.log(countSubstrings_Palindrome("abcddcba"))

// 状态：dp[i][j] 表示字符串s在[i,j]区间的子串是否是一个回文串。
// 状态转移方程：当 s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]) 时，dp[i][j]=true，否则为false

// 作者：jawhiow
// 链接：https://leetcode.cn/problems/palindromic-substrings/solution/liang-dao-hui-wen-zi-chuan-de-jie-fa-xiang-jie-zho/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
