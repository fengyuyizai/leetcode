/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0
    for (let i = 0; i < nums.length; i++) {
        a = a ^ nums[i]
    }
    return a
};

