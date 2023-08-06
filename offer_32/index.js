/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 */


// 广度优先遍历BFS
/**
 *    3
   / \
  9  20
    /  \
   15   7

   输出 ：[3,9,20,15,7]
 */

function dfs(root) {
    let res = []
    if (root === null) return res

    let queen = [root]

    while (queen.length > 0) {
        let node = queen.shift()
        res.push(node.val)
        queen.push(...[node.left , node.right].filter(item=>!!item))
    }
    return res
}