/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
 
    this.val = (val===undefined ? 0 : val)

    this.next = (next===undefined ? null : next)
    
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {

    if(!list1 && !list2){
        return list1
    }

    if(!list1){
        return  list2
    }

    if(!list2){
        return list1
    }

    let left_l1 = list1
    let left_l2 = list2
    
    let newListNode = new ListNode(-101) //最小值
    let start = newListNode;

    while(left_l1 || left_l2){
        
        if(!left_l1){
            newListNode.next = left_l2
            left_l2 = left_l2.next
            return start.next
        }

        if(!left_l2){
            newListNode.next = left_l1
            left_l1 = left_l1.next
            return start.next
        }

        if(left_l1.val <= left_l2.val){
            newListNode.next = new ListNode(left_l1.val)
            left_l1 = left_l1.next
        }
        else{
            newListNode.next = new ListNode(left_l2.val)
            left_l2 = left_l2.next
        }
        newListNode = newListNode.next
    }

    return start.next
}; 




let list1 = new ListNode(1 , new ListNode(2 , new ListNode(4)))
let list2 = new ListNode(1 , new ListNode(3 , new ListNode(4)))
console.log(JSON.stringify(mergeTwoLists(list1 , list2)))