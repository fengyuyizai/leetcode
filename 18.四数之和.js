/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    if (nums.length < 4) {
        return []
    }

    nums.sort((a, b) => {
        return a - b
    })

    let result = []
    let a, b, c, d,
        len = nums.length
    for (a = 0; a <= len - 4; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue
        
        for (b = a + 1; b <= len - 3; b++) {
            if (b > a + 1 && nums[b] === nums[b -1]) continue

            c = b + 1
            d = len - 1

            while(c < d) {
                if (nums[a] + nums[b] + nums[c] + nums[d] > target) {
                    d--
                } else if (nums[a] + nums[b] + nums[c] + nums[d] < target) {
                    c++
                } else {
                    result.push([nums[a], nums[b], nums[c], nums[d]])

                    while(d > c && nums[c] === nums[c + 1]) {
                        c++
                    }
                    while(d > c && nums[d] === nums[d - 1]) {
                        d--
                    }
                    c++
                    d--
                }
            }
        }
    }

    return result
};
// @lc code=end

