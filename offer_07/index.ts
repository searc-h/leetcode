/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Input: preorder = [-1], inorder = [-1]
Output: [-1]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 题解：  https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/solution/mian-shi-ti-07-zhong-jian-er-cha-shu-di-gui-fa-qin/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const  InMap = new Map<number, number>();//标记中序遍历
    let preorderCope : number[] = [];// 保留的先序遍历 

    preorderCope = preorder;
    for (let i = 0; i < preorder.length; i++) {
        InMap.set(inorder[i], i);
    }


    function recursive(pre_root_idx: number, in_left_idx: number, in_right_idx : number) {
        if (in_left_idx === in_right_idx) return null
        
        const tree = new TreeNode(preorder[pre_root_idx])
        
        tree.left = 
        
        tree.right = 
        
            
        return tree
    }
    
    return recursive(0,0,inorder.length-1);
};
