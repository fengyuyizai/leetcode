/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '0') {
                continue;
            }

            // 逐岛遍历
            res += deepRecursion(grid, i, j)
        }
    }

    return res
};

function deepRecursion(grid, i, j) {
    let count = 1;

    grid[i][j] = '0'

    // 向右扩展
    if (grid[i][j + 1] === '1') {
        grid[i][j + 1] = '0';
        deepRecursion(grid, i, j + 1);
    }

    // 向左扩展
    if (grid[i][j - 1] === '1') {
        grid[i][j - 1] = '0';
        deepRecursion(grid, i, j - 1);
    }

    // 向下扩展
    if (grid[i + 1] && grid[i + 1][j] === '1') {
        grid[i + 1][j] = '0';
        deepRecursion(grid, i + 1, j);
    }

    // 向上扩展
    if (grid[i - 1] && grid[i - 1][j] === '1') {
        grid[i - 1][j] = '1';
        deepRecursion(grid, i - 1, j) 
    }

    return count;
}

// @lc code=end