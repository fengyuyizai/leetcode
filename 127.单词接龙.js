/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let word_set = new Set(wordList)
    let cur_list = [beginWord]
    let next_list = []
    let detph = 1

    while (cur_list.length > 0) {
        // console.log(cur_list)
        for (let word of cur_list) {
            if (word === endWord) {
                return detph
            }

            for (let index = 0; index < word.length; index++) {
                for (let i = 0; i < 26; i++) {
                    let new_word = word.slice(0, index) + String.fromCharCode(97 + i) + word.slice(index + 1)
                    if (word_set.has(new_word)) {
                        word_set.delete(new_word)
                        next_list.push(new_word)
                    }
                }
            }
        }
        detph += 1
        cur_list = next_list.slice(0)
        next_list = []
    }
    return 0
};


// let res = ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"])
// console.log(res)
