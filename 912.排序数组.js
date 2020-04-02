/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

  function quickSort(arr, begin, end) {
      if (begin > end) return arr

      let temp = arr[begin]
      let i = begin
      let j = end

      while(i !== j) {
          while(arr[j] >= temp && j > i) {
            j--
          }
          while(arr[i] <= temp && j > i) {
            i ++
          }
          if (j > i) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
          }
      }

      [arr[begin], arr[i]] = [arr[i], temp]

      quickSort(arr, begin, i - 1)
      quickSort(arr, i+1, end)
    
      return arr
  }

  return quickSort(nums, 0, nums.length - 1)
};
// @lc code=end