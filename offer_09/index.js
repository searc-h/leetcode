/**
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 先进后出 + 先进后出 --》 先进先出

class CQueue {
    listAppend
    listDel
    constructor() {
        this.listAppend = []
        this.listDel = []
    }

    appendTail(value) {
        this.listAppend.push(value)
        return null
    }

    deleteHead() {
        if(this.listDel.length > 0){
            return this.listDel.pop()
        }else{
            if(this.listAppend.length === 0) return -1
            else {
                while(this.listAppend.length > 0){
                    this.listDel.push(this.listAppend.pop())
                }
                return this.listDel.pop()
            }
        }
    }
}