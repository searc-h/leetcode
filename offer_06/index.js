//输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function reversePrint(head) {
    const arr = []
    const mapNode = (node )=>{
        arr.unshift(node.val)
        if(!node.next) return
        mapNode(node.next)
    }

    if(head)mapNode(head)
    else return []

    return arr
};
//v执行用时：64 ms, 在所有 TypeScript 提交中击败了93.91%的用户
// 内存消耗：45 MB, 在所有 TypeScript 提交中击败了30.43%的用户

