/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = []
    function deep(root, sum, path) {
        if (!root) {
            return
        }
        // console.log(p)
        let p = path.slice(0)
        p.push(root.val)
        if (root.left === null && root.right === null) {
            
            if (sum - root.val === 0) {
                result.push(p)
            }
        }
        pathSum(root.left, sum - root.val, p)
        pathSum(root.right, sum - root.val, p)
    }
    deep(root, sum, [])
    return result
};

