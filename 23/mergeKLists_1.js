/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 来自21题的合并两个有序链表


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

 let mergeTwoLists = function(list1, list2) {
    console.log(JSON.stringify(list2))
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
    
    let newListNode = new ListNode(0) //最小值
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
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 方法一：顺序合并
// 我们可以想到一种最朴素的方法：用一个变量ans 来维护以及合并的链表，
// 第 ii 次循环把第 ii 个链表和 ans 合并，答案保存到 ans 中。
// 时间复杂度为O(k^2 * n) k是链表个数，n是最长链表长度
 let mergeKLists = function(lists) {
    let ans = null;
    for(let i =0; i < lists.length ; i++){
        console.log(i)
        ans = mergeTwoLists(ans , lists[i])
    }

    return ans
};
// let list1 = new ListNode(1 , new ListNode(4,new ListNode(5)))
// let list2 = new ListNode(1, new ListNode(3 , new ListNode(4)))
console.log(JSON.stringify(mergeKLists([list1 , list2])))


