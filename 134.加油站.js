/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0;
    let rest = 0;
    let run = 0;
    for (let i = 0; i < gas.length; i ++) {
        run += (gas[i] - cost[i])
        rest += (gas[i] - cost[i])
        if (run < 0) {
            start = i + 1;
            run = 0;
        }
    }
    return rest < 0 ? -1 : start
};

