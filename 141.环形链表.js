/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let handle = head

    if (!handle || !handle.next) {
        return false
    }
    
    let curItem
    while (handle.next !== null) {
        
        curItem = handle.next
        if (curItem.next === curItem) {
            return true
        }

        handle.next = curItem.next

        curItem.next = curItem
    }


    return false
};
// @lc code=end

