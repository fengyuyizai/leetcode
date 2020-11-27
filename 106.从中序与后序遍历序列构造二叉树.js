/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return pre_order(0, inorder.length - 1, 0, inorder.length - 1, inorder, postorder)
};

function pre_order(left_in, right_in, left_post, right_post, inorder, post) {
    if (left_in > right_in) {
        return null
    }

    let rootIn = left_in

    while(rootIn <= right_in && inorder[rootIn] !== post[right_post]) rootIn++

    let root = {}
    const left = rootIn - left_in

    root.val = post[right_post]
    root.left = pre_order(left_in, rootIn - 1, left_post, left_post + left - 1, inorder, post)
    root.right = pre_order(rootIn + 1, right_in, left_post + left, right_post - 1, inorder, post)
    return root
}
// @lc code=end

