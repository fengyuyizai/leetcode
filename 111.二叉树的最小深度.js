/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    // let MaxDeepNum = 0
    function deep(root) {
        if (!root) {
            return 0
        }
        let left = deep(root.left)
        let right = deep(root.right)

        return (left && right) ? Math.min(left, right) + 1 : left + right + 1
    }
    return deep(root)
};

