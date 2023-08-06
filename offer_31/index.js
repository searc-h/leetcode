/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，
 * 序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    class Stack {
        constructor(){
            this.list = []
        }

        getTop(){
            return this.list[this.list.length-1]
        }

        pop(){
            return this.list.pop()
        }

        push(n){
            return this.list.push(n)
        }
    }
    
    let stack = new Stack()
    let i = 0;
    while(popped.length!=0 && i<=pushed.length){
        if(stack.getTop() === popped[0]){ // 如果相等表示出栈
            stack.pop()
            popped.shift()
        }else{  // 不等表示入栈
            stack.push(pushed[i])
            i++;
        }
    }
   
    return stack.list.length==0; // 最后为空表示顺序符合
   
};