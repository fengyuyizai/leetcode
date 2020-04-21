/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let minH = Math.min(height[left], height[right])

    let res = 0

    while(right > left) {
        res = res < minH * (right - left) ? minH * (right - left) : res

        if (height[left] > height[right]){
            right--
        } else {
            left++
        }
        minH = Math.min(height[left], height[right])
    }
    return res
};
// @lc code=end

