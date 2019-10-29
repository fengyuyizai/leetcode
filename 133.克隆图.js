/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, hash = new WeakMap()) {
    if(hash.has(node)) return hash.get(node)
    let tempObj = Array.isArray(node) ? [] : {}
    hash.set(node, tempObj)
    for (let key in node) {
        tempObj[key] = typeof node[key] === 'object' ? cloneGraph(node[key]): node[key]
    }
    return tempObj
};

// let test = {"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}
// let res = cloneGraph(test)
// console.log(res)
