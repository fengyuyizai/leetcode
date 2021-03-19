/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for (let i = 0; i < tokens.length; i++) {
        switch(tokens[i]) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                let a = stack.pop();
                stack.push(stack.pop() - a);
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case "/":
                let b = stack.pop();
                stack.push(parseInt(stack.pop() / b, 10));
                break;
            default: 
                stack.push(parseInt(tokens[i], 10));
        }
    }

    return stack.pop();
};
// @lc code=end


let list = ["4","13","5","/","+"]

evalRPN(list);