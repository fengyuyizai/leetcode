/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head
    }
    let h = new ListNode(0)

    h.next = head
    let curNode = h

    while(curNode && curNode.next) {
        if (curNode.next.next) {
            swap(curNode)
        }
        // console.log(curNode.val)
        curNode = curNode.next.next
    }
    return h.next
};
function swap(preNode) {
    let node = preNode.next

    let temp = node.next
    node.next = temp.next
    temp.next = preNode.next
    preNode.next = temp
}
// @lc code=end

