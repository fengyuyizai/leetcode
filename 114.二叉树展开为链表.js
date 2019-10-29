/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return null
    }

    let left = flatten(root.left)
    let right = flatten(root.right)
    let tem = root.right
    root.right = root.left
    root.left = null
    while(root.right != null) {
        root = root.right
    }
    root.right = tem
    
    return root
};

