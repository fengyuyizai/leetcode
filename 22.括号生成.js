/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function dp (l, r, res, str) {
        if (l > r) {
            return
        }
        if (l == 0 && r ==0) {
            res.push(str)
        }
        if (l > 0) {
            dp(l - 1, r, res, str + '(')
        }
        if (r > 0) {
            dp(l, r - 1, res, str + ')')
        }
    }
    dp(n, n, res, '')
    return res
};

