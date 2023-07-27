/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
 * 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */
var printNumbers = function (n) {
    const maxNumByN = new Array(n).fill(9)
    const maxNum = maxNumByN.join('')

    function* makeArr(n) {
        n++;
        while(n--){
            if (n === 0) return
            else yield n
        }
    }

    return Array.from(makeArr(maxNum)).reverse()
};
console.log(printNumbers(2))