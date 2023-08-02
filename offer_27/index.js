// 二叉树的镜像
// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
/**
 * 例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 */

// 节省空间
var mirrorTree = function(root) {

    // 后序遍历思想
    function lateDp(rootNode){
        let left = null , right = null;
        if(!rootNode?.left && !rootNode?.right ){
            return rootNode
        }

        if(rootNode.left)  {
            left = lateDp(rootNode.left) // 拿到左子节点
        }
        if(rootNode.right) {
            right = lateDp(rootNode.right) // 拿到右子节点
        }
        // 交换
        rootNode.left = right
        rootNode.right = left
        // 返回自身
        return rootNode
    }

    return lateDp(root)
};


// 巧妙的递归
// 自身的作用就是返回树镜像结构的根节点
var mirrorTree = function(root) {
    return root == null ? null : new TreeNode(root.val, mirrorTree(root.right), mirrorTree(root.left));
 };