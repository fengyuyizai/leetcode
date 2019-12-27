/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = []

    let x = 0;
    let y = 0;
    let dir = 'r';
    let topLimit = n - 1;
    let downLimit = 0

    for (let i = 0; i < n * n; i++) {
        
        if (!Array.isArray(result[x])) {
            result[x] = []
        }
        
        result[x][y] = i + 1

        if (result[x][y] === n * n) {
            return result
        }

        if (x === downLimit && y === topLimit) {
            dir = 'd'
        } else if (x === topLimit && y === topLimit) {
            dir = 'l'
        } else if (x === topLimit && y === downLimit) {
            dir = 't'
            topLimit --;
            downLimit ++;
        } else if (x === downLimit && y === downLimit - 1) {
            dir = 'r'
        }

        switch(dir) {
            case 'r':
                y++
                break;
            case 'd':
                x++
                break;
            case 'l':
                y--;
                break;
            case 't':
                x--;
                break;
        }
    }
};
// @lc code=end

