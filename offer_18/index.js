/**
 * 
 * 给定单向链表的头指针和一个要删除的节点的值，
 * 定义一个函数删除该节点。返回删除后的链表的头节点。
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
* @param {ListNode} head
* @param {number} val
* @return {ListNode}
*/
var deleteNode = function(head, val) {
   const cur = head;
   if(cur.val === val) return cur.next
   function map(pre , cur ,value){
       if(cur.val === value){
            pre.next = cur.next
       }else{
           map(cur , cur.next , value)
       }
   }

   map(cur , cur.next , val)
   return head
};