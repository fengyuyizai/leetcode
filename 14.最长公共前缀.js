/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }
    let i = 0;
    let j = 0;
    let curWord = strs[0][0]
    while (true) {
        if (i === strs.length) {
            j ++
            i = 0
            curWord = strs[i][j]
        }
        if (!strs[i][j]) {
            break
        }
        if (curWord === strs[i][j]) {
            i ++
        } else {
            break
        }
    }
    return strs[0].substr(0, j)
};

// let data = ["flower","flow","flight"]
// longestCommonPrefix(data)
