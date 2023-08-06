/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
     // 判断两个树是不是对称的
    function isSymetricTrees(leftTree , rightTree){
        if(leftTree === null && rightTree === null) return true
        return leftTree?.val === rightTree?.val && isSymetricTrees(leftTree.left ,rightTree.right) && isSymetricTrees(leftTree.right , rightTree.left)
    }

    return isSymetricTrees(root,root)
};