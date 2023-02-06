/**
 * @des 暴力解法，空间换时间
 * @param {*} s 
 * @returns 
 */
function longestValidParentheses(s) {
    let res = 0;
    let n = s.length;
    // 第一层循环确实起始位置
    for(let i = 0; i < n; i++){
        let top = 0;
        for(let j = i; j < n; j++){
            // 情况一
            if(s.charAt(j) == '('){
                top++;
            }
            // 情况二
            else {
                // 栈中有'('元素与之对应
                if(top != 0){
                    top--;
                    // 匹配结束，已获得一个连续的子串，更新答案
                    if(top == 0) res = Math.max(res, j - i + 1);
                }
                // 更新左边界
                else i = j + 1;
            }
        }
    }
    return res;
}

// 作者：4JJudRhwAp
// 链接：https://leetcode.cn/problems/longest-valid-parentheses/solution/on-jie-fa-jin-hu-shuang-bai-by-4jjudrhwa-mg3f/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。