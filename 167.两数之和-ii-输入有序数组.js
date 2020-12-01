/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    const len = numbers.length;

    if (len <= 1) {
        return [];
    }

    let i = 0;
    let j = len - 1;

    let curTarget = 0;
    while(numbers[i] <= target) {

        curTarget = numbers[i] + numbers[j];
        if (curTarget < target) i ++;

        if (curTarget > target) j --;

        if (curTarget == target) {
            return [i + 1, j + 1]
        }
    }

    return []

};
// @lc code=end

// twoSum([-1, 0], -1)