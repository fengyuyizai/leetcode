/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return null
    }

    if (root.left !== null) {
        if (root.right !== null) {
            root.left.next = root.right
        } else {
            root.left.next = nextNode(root.next)
        }
    }

    if (root.right !== null) {
        root.right.next = nextNode(root.next)
    }

    connect(root.left)
    connect(root.right)
    return root
};

function nextNode(Node) {
    while (Node) {
        if (Node.left !== null) {
            return Node.left
        } else if (Node.right !== null) {
            return Node.right
        } else {
            Node = Node.next
        }
    }
    return null
}

