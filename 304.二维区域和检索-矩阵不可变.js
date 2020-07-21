/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    this.rowLen = matrix.length - 1
    this.colLen = matrix[0] && matrix[0].length - 1 || 0
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    let limitRow = Math.min(row2, this.rowLen)
    let limitCol = Math.min(col2, this.colLen)
    for (let i = row1; i <=limitRow; i++) {
        for (let j = col1; j <= limitCol; j++) {
            sum += this.matrix[i][j]
        }
    }

    return sum
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

