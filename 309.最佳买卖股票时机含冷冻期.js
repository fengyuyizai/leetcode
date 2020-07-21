/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if (len <= 1) {
        return 0
    }
    let baseArr = []
    for (let n = 0; n < len; n++) {
        baseArr[n] = 0
    }
    let sell = [...baseArr]
    let buy = [...baseArr]
    let cool = [...baseArr]

    buy[0] = -prices[0]

    for (let i = 1; i < len; i++ ) {
        sell[i] = prices[i] + buy[i - 1]
        buy[i] = Math.max(cool[i - 1] - prices[i], buy[i - 1])
        cool[i] = Math.max(sell[ i - 1 ], cool[i - 1])
    }

    
    
    return Math.max(cool[len - 1], sell[len - 1])
};
// @lc code=end
