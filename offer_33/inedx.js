/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
    function recur(postorder , i , j){
        if(i >= j) return true
        let p = i;
        while(postorder[p] < postorder[j]) p++;
        let m = p;
        while(postorder[p] > postorder[j]) p++;

        return p === j && recur(postorder , i , m -1) && recur(postorder , m , j-1)
    }

    return recur(postorder , 0  ,postorder.length - 1)
};