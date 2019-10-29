/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board==null||board.length==0)
        return ;
    
    let h = board.length
    let w = board[0].length
    for (let i = 0; i < h; i++) {
        dfs(board, i, 0)
        dfs(board, i, w-1)
    }
    for (let j = 0; j < w; j++) {
        dfs(board, 0, j)
        dfs(board, h - 1, j)
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            } else if (board[i][j] === '-') {
                board[i][j] = 'O'
            }
        }
    }
};

function dfs(board, i, j){
    let h = board.length
    let w = board[0].length
    if(i<0||j<0||i>=h||j>=w||board[i][j]!='O')
        return;
    board[i][j]='-';
        dfs(board,i-1,j);
        dfs(board,i+1,j);
        dfs(board,i,j-1);
        dfs(board,i,j+1);
    return ;
}

