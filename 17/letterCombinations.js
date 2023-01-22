/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let mapArr = [
        ["a","b","c"] , ["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],
        ["p","q","r","s"],["t","u","v"],["w","x","y","z"]
    ]
    
    if(digits.length == 0 ){
        return []
    }
    if(digits.length == 1){
        return mapArr[+digits - 2]
    }


    let digitArr = digits.split("").map((item)=>{
        return mapArr[parseInt(item) - 2]
    })

    console.log("sorted digit list: ",digitArr)

    

    let result  = digitArr.reduce((pre , cur )=>{
        let res = []
        pre.forEach((beforeDigit)=>{

            cur.forEach((afterDigit)=>{
                res.push(beforeDigit + afterDigit)
                
            })  
        })

        return res
    })
    
    return result
};

console.log(letterCombinations("234"))