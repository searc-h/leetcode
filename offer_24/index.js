// 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @desc 时间复杂度O(n)
 */
 var reverseList = function(head) {
    let cur = new ListNode(null)
    while(head != null){
        let temp = new ListNode(head.val) // 暂存节点
        // 指针变换
        temp.next = cur.next 
        cur.next = temp
        // head自增
        head = head.next
    }
    return cur.next
};