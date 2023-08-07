/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * 
 *  3
   / \
  9  20
    /  \
   15   7

输出：
[
  [3],
  [9,20],
  [15,7]
]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let res = []
    if (root === null) return res

    let queen = [root]

    while (queen.length > 0) {
        let i = queen.length // 记录每一层的个数
        let temp = [] 
        // 把同一层的记录在temp中即可
        while(i>0){
            let node = queen.shift()
            temp.push(node.val)
            queen.push(...[node.left , node.right].filter(item=>!!item))
            i--;
        }
        res.push(temp)
    }
    return res
};