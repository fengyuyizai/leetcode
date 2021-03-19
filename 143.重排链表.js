/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let headList = [];
    while(head) {
        headList.push(head)
        head = head.next;
    }

    let len = headList.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        headList[i].next = headList[len - 1 - i];
        headList[len - 1 - i].next = headList[i + 1] || null;
    }
    headList[Math.floor(len / 2)].next = null;
};

// @lc code=end

