/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let len = nums.length
    if (len == 0) return -1

    let i = 0
    let dir = 'l'
    if (nums[0] <= target) {
        dir = 'l'
    } else {
        dir = 'r'
        i = len - 1
    }

    while(typeof(nums[i]) != 'undefined') {
        if (dir == 'r') {
            if (nums[i] > target) {
                i--
            } else if (nums[i] < target) {
                i = -1
                break
            } else {
                break
            }
        } else {
            if (nums[i] < target) {
                i = i + 1 >= len ? -1 : i + 1
            } else if (nums[i] > target){
                i = -1
                break
            } else {
                break
            }
        }
    }
    
    return i
};
// @lc code=end
