/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    
    let last = root && root.val
    function dfs(root) {
        if (!root) {
            return true
        }
        // console.log(root.val)
        
        // if ((root.left && last <= root.val && root.val <= root.left.val) ||
        // (root.right && last >= root.val && root.val >= root.right.val)) {
            
        //     res = false
        //     return null
        // }
        if (dfs(root.left)) {
            // console.log(root.val)
            if (last < root.val) {
                last = root.val
                return dfs(root.right)
            }
        }
        return false
    }
    let res = dfs(root)
    return res
};

