// 用容量为K的最小堆优先队列，
// 把链表的头结点都放进去，然后出队当前优先队列中最小的，输出到结果链表中
// 然后让出队的那个节点的下一个节点入队，再出队当前优先队列中最小的，直到优先队列为空。

import { Heap } from "./heap.js"; //引入Js实现的小根堆，用小根堆来实现优先队列

// 但是由于这个Heap还没有做相应数据结构的适用（泛型）所以给一个C++代码做参考
/**
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

        if (lists.length == 0) {
            return null;
        }

        ListNode head = new ListNode(0);  //头指针
        ListNode tail = head;  // 尾指针

        PriorityQueue<ListNode> pq = new PriorityQueue<>(new Comparator<ListNode>() { 
            @Override

            //根据 ListNode.val来建立 小根堆，即val值越小，优先级越高 ！！

            public int compare(ListNode o1, ListNode o2) { 
                return o1.val - o2.val;
            }
        });

        for (ListNode list : lists) {
            if (list == null) {
                continue;
            }
            pq.add(list);  //添加元素，自动根据优先级排序
        }

        while (!pq.isEmpty()) {
            ListNode nextNode = pq.poll();  // 队列中弹出优先级最高的元素，即弹出头节点值最小的链表
            tail.next = nextNode;
            tail = tail.next;
            if (nextNode.next != null) {
                pq.add(nextNode.next);  // 让弹出链表的头节点指向下一个元素，并插入队列
            }
        }
        return head.next; 
    }
}
 * 
 */

