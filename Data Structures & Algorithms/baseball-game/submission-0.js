class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        for (let operation of operations) {
            let last = stack.length - 1
            if (operation == '+') {
                stack.push(stack[last] + stack[last-1])
            } else if (operation === 'D') {
                stack.push(stack[last] * 2)
            } else if (operation === 'C') {
                stack.pop()
            } else {
                stack.push(Number(operation))
            }
        }
        return stack.reduce((acc, num) => acc+=num, 0)
    }
}
