/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = []
    let arr = []
    let num
    k = k - 1
    for (let i = 0; i < n; i++) {
        arr.push(i + 1)
    }
    for(let i = 0; i < n; i++) {
        let m = factorialize(n - i - 1)
        num = parseInt(k / m)
        k = k - num * m
        res[i] = arr.splice(num, 1)[0]
    }
    return res.join('')
};

function factorialize(num) {
    if (num>0)
    {return (num * factorialize(num - 1));}
    else
    return (1);
}
// @lc code=end