/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let loc = 0;
    let arr = []
    let down = false
    let len = Math.min(s.length, numRows)

    for (let i = 0 ; i< len; i++) arr[i] = ''
    
    for (let i = 0; i < s.length; i++) {
        arr[loc] += s.substr(i, 1)
        if (loc == 0 || loc === numRows - 1) {
            down = !down
        }
        down ? loc++ : loc--
    }

    console.log(arr)
    
    return arr.join('')
};
// @lc code=end

