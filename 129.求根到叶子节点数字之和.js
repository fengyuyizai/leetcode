/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
    function deep (root, sum) {
        if (root === null) {
            return 0
        }
        sum *= 10
        sum += root.val
        if (root.left === null && root.right === null) {
            return sum
        }
        return deep(root.left, sum) + deep(root.right, sum)
    }
    return deep(root, 0)
};

