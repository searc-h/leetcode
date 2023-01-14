// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

/**
 * @description 解法利用了647题的动态规划，首先查找出全部的回文子串，然后根据状态矩阵查找最长回文子串
 * @param {string} s
 * @return {string}
 * @tips 时间复杂度O(n^2) ， 空间复杂度O(n^2)
 */
 var longestPalindrome = function(s) {
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
    console.log('boolArr\n' , boolArr)

    let maxRowDir = [0,0];

    boolArr.map((itemArr)=>{
        
        let oneRowResult = [] //记录每一行为true的下标

        itemArr.forEach((item  , index)=>{
            if(item==true){
                oneRowResult.push(index) //为true则记录：且第一个数字一定是index，这是boolArr的特征
            }
        })

        // 比较最后一个数与第一个数的差值，越大就更新maxRowDir
        if(oneRowResult.length>1 && (oneRowResult[oneRowResult.length-1]-oneRowResult[0] > maxRowDir[1]-maxRowDir[0])){
            maxRowDir = [oneRowResult[0],oneRowResult[oneRowResult.length-1]]
        }
        
        console.log(maxRowDir)
        console.log(s.slice(maxRowDir[0] , maxRowDir[1]+1))
    })

    return s.slice(maxRowDir[0] , maxRowDir[1]+1)  //使用maxRowDir进行截取
};


//优化：既然有s[i][j] = true ， 表示从i到j处都是回文子串，所以直接记录差值和起始位置即可。
var longestPalindrome_Optimize = function(s) {
    if(s.trim()==""){
        return new Error("输入错误")
    }

    let boolArr = new Array(s.length).fill(false) // 一维数组

    boolArr =  boolArr.map(item=>{  // 二维数组： 若s[i]到s[j]是回文字符串，则boolArr[i][j] = true，否则为false
        return new Array(s.length).fill(false)
    })

    let len = 0
    let start = 0;
    let end = 0;
    for(let j = 0; j < s.length ; j++){
        for(let i = 0 ; i <= j ; i++){

            if(s[i] === s[j] && ( j - i < 2 || boolArr[i+1][j-1] )){ // 状态转移方程
                boolArr[i][j] = true
                
                if( j - i + 1 > len){
                    len = j - i + 1;
                    start = i
                    end = j
                }
            }
        }
        
    }

    return s.slice(start , end+1)  //使用maxRowDir进行截取
};

/**
 * @description 中心扩散法
 * @param {string} s
 * @return {string}
 * @tips 时间复杂度O(n^2) ， 空间复杂度O(1) , 中心点一共有2n-1个（一个字符/相邻两个字符为中心点） 
 */
 var longestPalindrome = function(s) {
    let res = '' //记录最长回文字符串

    if(s.length < 2){
        return s
    }

    for(let i=0; i<s.length; i++){
        center(i, i) // 一个字符为中心
        if(s[i] === s[i+1]){
            center(i, i+1) // 相邻两个字符为中心
        }
    }

    function center(m,n){
        while(m>= 0 && n<s.length && s[m] == s[n]){   //如果相等则两边扩散
            m--  
            n++
        }
        // 更新最长回文字符串
        if(n-m -1 > res.length){
            res = s.slice(m+1,n)
        }
    }
    return res
};