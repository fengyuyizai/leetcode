/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */
/**1
 * @param {number[]} nums
 * @return {number}
 */
/*
var singleNumber = function(nums) {
    
    while(nums.length > 0) {
        const curNum = nums.splice(0, 1)[0];
        let once = 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === curNum) {
                nums.splice(i, 1)
                once++;
                i--
            }
        }

        if (once === 1) {
            return curNum;       
        }
    }
};
*/
var singleNumber = function(nums) {
    const sum_1 = Array.from(new Set(nums)).reduce((prevValues, currentValue) => prevValues + currentValue);

    const sum_2 = nums.reduce((prevValues, currentValue) => prevValues + currentValue);

    return (sum_1 * 3 - sum_2) / 2;
}
