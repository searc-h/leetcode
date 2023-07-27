//实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题
// 这道题尝试使用尾递归，依旧会在测试用例上失败

// 【尾递归】  测试用例：0.00001 ， 2147483647 溢出
var myPow = function(x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    if (n === -1) return 1 / x
    
    const row = n < 0 ? 1/x : x

    const dep = (dx ,dn , r)=>{
        if(dn === 1) return dx;
        else return dep(dx * r , dn - 1 , r);
    }
    if(n < 0) return dep(1/x ,  Math.abs(n)  ,row)
    else return dep(x , n , row)
};

// 【快速幂乘】
var myPow = function (x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    if (n === -1) return 1 / x

    if (n < 0) return 1 / myPow(x, -n);

    //偶次幂
    if (n % 2 === 0) return myPow(x * x, n / 2) 
    //奇次幂
    if (n % 2 === 1) return x * myPow(x , n -1)
}
console.log(myPow(0.00001 , 2147483647))