/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    let firstLen = triangle.length
    let dp = [...triangle[firstLen - 1]]

    for (let i = firstLen - 2; i >= 0 ; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }
    // console.log(JSON.stringify(dp))
    return dp[0]
};
// @lc code=end

