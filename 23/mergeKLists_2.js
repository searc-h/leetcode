

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return list1
    if(!list1) return  list2
    if(!list2) return list1

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

let merge = function(lists, l, r) {
    if (l == r) {
        return lists[l];
    }
    if (l > r) {
        return null;
    }
    let mid = Math.floor((l + r) / 2);
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 方法二：分治合并
// 考虑优化方法一，用分治的方法进行合并。
// 思想与归并排序如出一辙
 let mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1);
};

let list1 = new ListNode(1 , new ListNode(4,new ListNode(5)))
let list2 = new ListNode(1, new ListNode(3 , new ListNode(4)))
let list3 = new ListNode(2,  new ListNode(3 , new ListNode(6)))
console.log(JSON.stringify(mergeKLists([list1 , list2 , list3])))