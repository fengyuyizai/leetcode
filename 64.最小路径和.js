/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let y = grid.length - 1
    let x = grid[0].length - 1

    for (let i = y; i >= 0; i--) {
        for (let j = x; j >= 0; j--) {
            if (i !== y && j === x) {
                grid[i][j] = grid[i][j] + grid[i+1][j]
            } else if (i === y && j !== x) {
                grid[i][j] = grid[i][j] + grid[i][j + 1]
            } else if (i !== y && j !== x) {
                grid[i][j] = grid[i][j] + Math.min(grid[i][j+1], grid[i+1][j])
            }
        }
    }

    return grid[0][0]
};

