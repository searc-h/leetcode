/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = head
    let nodeCount = 1;
    while(node.next != null){ //统计节点个数
        node = node.next
        ++nodeCount;
    }
    if(nodeCount < n){ //如果n大于节点个数，直接返回head
        return head
    }
    if(nodeCount == n) // 如果n 刚好等于节点个数，说明需要删除第一个节点
    {
        head = head.next
        return head
    }
    
    let startCount = nodeCount - n + 1  //正着数第多少个

    node =  head;
    let i = 1;
    while(i <= startCount){ //正数 = 总数 - 倒数 + 1
        
        if(i  == startCount - 1){
            node.next = node.next.next
        }else
            node = node.next
        i++;
    }

    return head
};

// 以下是自定义ListNode数据结构，可以直接在末尾新增节点
function ListNode(val, next) {

    this.val = (val === undefined ? 0 : val)

    this.next = (next === undefined ? null : next)

    this.addNodeAtEnd = (val)=>{
        let endNode = this;

        while(endNode.next != null){
            endNode = endNode.next
        }

        endNode.next=  new ListNode(val)
    }
}

let head = new ListNode(1 , new ListNode(2) , new ListNode(3))
let headEnd = new ListNode(1)
headEnd.addNodeAtEnd(2)
headEnd.addNodeAtEnd(3)
headEnd.addNodeAtEnd(4)
headEnd.addNodeAtEnd(5)
// console.log(JSON.stringify(headEnd))
let result = removeNthFromEnd(headEnd , 4)
console.log(JSON.stringify(result))
