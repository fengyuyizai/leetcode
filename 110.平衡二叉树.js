/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
    let difference = true
    function deep(root) {
        if (root == null) return 0

        let left = deep(root.left)
        let right = deep(root.right)
        if (Math.abs(left - right) > 1) 
            difference = false
        return Math.max(left, right) + 1
    }
    deep(root)
    return difference
};

