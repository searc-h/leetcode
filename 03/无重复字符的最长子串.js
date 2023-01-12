/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let stringArr = s.split("") // 转化为数组
    console.log(stringArr)
    let subStrArr = [] // 子串数组

    let longestLen = 0 // 当前最长子串长度

    stringArr.find((_ , index) => {

        loopStrArr = stringArr.slice(index) // 切片
        if(loopStrArr.length <= longestLen) return true // 如果切片长度小于最长子串就不用再循环了
        

        loopStrArr.find(item=>{
            if( !isRepet(subStrArr , item) ) {//不存在，就添加到子串数组中

                subStrArr.push(item)
                longestLen = subStrArr.length > longestLen? subStrArr.length : longestLen  
            }
            else{

                longestLen = subStrArr.length > longestLen? subStrArr.length : longestLen  
                //存在，就退出循环，跟新最长子串长度
                return true//注意这里的return相当于break
            }
        })
        //每次查找完毕要记得清空子串数组
        subStrArr = []
    })


    return longestLen

};

/**
 * 
 * @param {*} strArr 字符数组
 * @param {*} char 字符
 * @returns boolean 该字符数组是否存在该字符
 */
function isRepet(strArr  , char){
    return strArr.includes(char)
}

// console.log(lengthOfLongestSubstring(" "))


// 以下是更为优雅的代码实现
/** 
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring_Map = function (s) {
    var map = new Map() // map结构
    var left = 0  // 左边界
    var num = 0   // 最长长度

    for (var i = 0; i < s.length; i++) {
        //如果重复 且 重复位（之间）<= 左边界：保证left左边界只能往右走，不能往回走
        if (map.has(s[i]) && left <= map.get(s[i]) ) { 
            
            left = map.get(s[i]) + 1  // 更新左边界 ：重复位（之前） + 1 ！

        } 
            num = Math.max(num,i - left + 1) // 更新 最长长度
            map.set(s[i], i) // 对于已存在的字符，map更新对应值
    }
    return num
};

console.log(lengthOfLongestSubstring_Map("abba"))