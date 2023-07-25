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

    /**
     * 
     * @param pre_root_idx 此次递归根节点 在 【preorder】中的索引
     * @param in_left_idx 此次递归左边界 在 【inorder】中的索引
     * @param in_right_idx 此次递归有边界 在 【inorder】中的索引
     * @returns 递归
     */
    function recursive(pre_root_idx: number, in_left_idx: number, in_right_idx : number) {
        if (in_left_idx === in_right_idx) return null
        
        const tree = new TreeNode(preorderCope[pre_root_idx])
        
        const in_rootIdx = InMap.get(preorderCope[pre_root_idx]) as number  // 根节点在inorder中的索引

        // （根节点在preorder的下标 +1 , 左边界保持不动 ， 右边界为 根节点在inorder中的索引 -1）
        tree.left = recursive(pre_root_idx + 1  , in_left_idx ,in_rootIdx - 1 ) 
        
        // 左树的节点数目 ：根节点在inorder的下标 - 左边界
        const leftLen = in_rootIdx - in_left_idx; 
        
        // （根节点在preorder的下标 + 左边树的节点数 + 1 , 左边界根节点在inorder中的索引 + 1 ，左边界保持不动）
        tree.right = recursive(pre_root_idx  + leftLen + 1  , in_rootIdx + 1 ,in_right_idx )
        
            
        return tree
    }
    
    return recursive(0,0,inorder.length-1);
};
