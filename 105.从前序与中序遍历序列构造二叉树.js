/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// Definition for a binary tree node.
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    p = i = 0
    build = function(preorder, p_start, p_end, inorder, i_start, i_end) {
        if (p_start === p_end) {
            return null
        }
        let node_val = preorder[p_start]
        let node = new TreeNode(node_val)
        
        // 寻找根节点\
        let i_root_index = 0
        for (let i = 0; i < i_end; i++) {
            if (inorder[i] === node_val) {
                i_root_index = i
                break
            }
        }
        
        leftNum = i_root_index - i_start
        node.left = build(preorder, p_start + 1, p_start + leftNum + 1, inorder, i_start, i_end)
        node.right = build(preorder, leftNum + 1, p_end, inorder, i_root_index + 1, i_end)
        return node
    }
    return build(preorder, 0, preorder.length, inorder, 0, inorder.length)
};
// let preorder = [3,9,20,15,7]
// let inorder = [9,3,15,20,7]
// buildTree(preorder, inorder)

