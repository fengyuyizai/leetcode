/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let table = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    function deep(res, str, digits, table, k) {
        if (str.length === digits.length) {
            res.push(str)
            return
        }
        let temp = table[digits[k]]
        for (let word of temp) {
            str += word
            deep(res, str, digits, table, k + 1)
            str = str.substr(0, str.length - 1)
        }
        return 
    }
    let res = []
    if (digits === '') {
        return res
    }
    deep(res, '', digits, table, 0)
    return res
};

