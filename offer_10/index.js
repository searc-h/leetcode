/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。
 * 斐波那契数列的定义如下：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。} n 
 */

// 动态规划
var fib = function(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    const mod = Math.pow(10, 9) + 7;
    const dp = new Array(n + 1);  // 状态
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }
    return dp[n];
  };
  
  
  // 记忆搜索 + 递归
  var fib = function(n) {
    const memo = new Array(n + 1).fill(0); // 存储已经计算过的值
    const mod = Math.pow(10, 9) + 7;
    const helper = (n) => {
      if (n === 0 || n === 1) {
        return n;
      }
      if (memo[n] !== 0) {
        return memo[n];
      }
      memo[n] = helper(n - 1) + helper(n - 2); 
      return memo[n] % mod; // 直接从存储中找值
    }
    return helper(n);
  };
  