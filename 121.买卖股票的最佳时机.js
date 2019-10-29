/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let min_p = 9999
    let max_p = 0
    for (let i = 0; i < prices.length; i++) {
        min_p = Math.min(min_p, prices[i])
        max_p = Math.max(max_p, prices[i] - min_p)
    }
    return max_p
};

