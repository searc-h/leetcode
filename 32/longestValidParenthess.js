/**
 * @des 动态规划
 * @param {*} s 
 * @returns 
 */
function longestValidParentheses(s) {
    let len = s.length
    if (len == 0)
        return 0
    let dp = new Array(len).fill(0)
    for (let i = 1; i < len; i++) {
        if (s[i] == ")") { 
            pre = i - dp[i - 1] - 1;

            if (pre >= 0 && s[pre] == "(") {
                dp[i] = dp[i - 1] + 2

                if (pre > 0) dp[i] += dp[pre - 1]
            }
        }
    }
    return dp.sort((a,b)=>b-a)[0]
}
console.log(longestValidParentheses("(())()"))