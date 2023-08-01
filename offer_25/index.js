/** 
 * 合并两个排序的链表
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let left = l1
    let right = l2
    let res = new ListNode(undefined);
    const finalRes = res;
    while(left != null && right != null){
        if(left.val <= right.val){
            res.next = left
            left = left.next
        }
        else if(left.val >= right.val){
            res.next = right
            right = right.next
        }
        res = res.next
    }
    if(left != null)
         res.next = left
    if(right != null )
         res.next = right
    return finalRes.next

};



// 递归实现
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};