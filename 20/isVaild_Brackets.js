/**
 * 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let signStacks = []

    let signMap_Push = ["(" , "{" , "["]

    let signMap_Pop = {
       //用于抵消的右方向符号
       ")":"(",
       "}":"{",
       "]":"["
    }
    s.split("").forEach(element => {
        if(signMap_Push.includes(element)){
            signStacks.push(element)  
        }
        else if(signMap_Pop[element] === signStacks[signStacks.length - 1]){
            signStacks.pop()
        }else{
            signStacks.push(element)  
        }
        
        console.log(signStacks)
    });

    return signStacks.length == 0 ? true : false

};

isValid("(){}}{")