/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let dirX = [-1, 0, 1, 1, 1, 0, -1, -1]
    let dirY = [-1, -1, -1, 0, 1, 1, 1, 0]

    let lenY = board.length
    let lenX = board[0].length

    for (let i = 0; i < lenY; i++) {
        for (let j = 0; j < lenX; j++) {

            let num = 0
            let y = i,
                x = j
            for (let k = 0; k < 8; k++) {
                y = dirY[k] + i
                x = dirX[k] + j

                if (y < 0 || x < 0 || x >= lenX || y >= lenY) {
                    continue
                }
                num += switchStatus(board[y][x])
            }

            let curVal = switchStatus(board[i][j])
            switch(num) {
                case 0:
                case 1: 
                    board[i][j] = curVal ? -1 : 0
                    break;
                case 2: break // 不变
                case 3:
                    board[i][j] = curVal ? 1 : 2
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    board[i][j] = curVal ? -1 : 0
                    break
                    
            }
        }
    }

    // 复原
    for (let i = 0; i< lenY; i++) {
        for (let j = 0; j < lenX; j++) {
            board[i][j] = board[i][j] > 0 ? 1 : 0
        }
    }
};
/**
 * -1: 死亡
 * 1: 存活
 * 0: 没有生命
 * 2: 新生
 */
function switchStatus(status) {
    switch(status) {
        case -1:
        case 1: return 1
        case 2: 
        case 0: return 0
    }
}


// @lc code=end

