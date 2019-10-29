/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let output = 0
    let result = 0
    for (let i = 0; i < prices.length - 1; i++) {
        output = prices[i + 1] - prices[i]
        if (output > 0) {
            result += output
        }
    }

    return result
};

