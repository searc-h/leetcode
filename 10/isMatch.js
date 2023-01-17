/**
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
示例 2:

输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3：

输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

提示：

1 <= s.length <= 20
1 <= p.length <= 30
s 只包含从 a-z 的小写字母。
p 只包含从 a-z 的小写字母，以及字符 . 和 *。
保证每次出现字符 * 时，前面都匹配到有效的字符
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 const isMatch = (s, p) => {
    if (s == null && p == null) return true;  //都为空
    if(s == null ||  p == null) return false; //有一个为空
  
    const sLen = s.length, pLen = p.length;
  
    //初始化状态矩阵
    const dp = new Array(sLen + 1);
    for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
    }
    dp[0][0] = true;  // dp[0][0]一定是为true的，因为空串与空串匹配


    //首先填写第一行状态
    for (let j = 1; j < pLen + 1; j++) {
      if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];  
    }

    
    // 迭代填写剩余的矩阵
    for (let i = 1; i < sLen + 1; i++) {
      for (let j = 1; j < pLen + 1; j++) {
  
        if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {  //相等 或者为 .

          dp[i][j] = dp[i - 1][j - 1];  // 等于前面字符串是否匹配上的结果

        } else if (p[j - 1] == "*") {   // 如果不相等，那么还需要看是否为 * （表示0个或者多个）

          if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {  // 如果是* ，且 与*之前的字母相等，那么结果就是如下（为什么？）
           
            dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];

          } else {  // 如果是* ，但是与 *之前的字母不相等，那么结果就是与之前的匹配结果保持一致

            dp[i][j] = dp[i][j - 2];
          }
        }
        //如果既不相等或者 .   也不是 *  那么直接判断为false，不匹配（不需要修改）
      }
    }
    return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
}