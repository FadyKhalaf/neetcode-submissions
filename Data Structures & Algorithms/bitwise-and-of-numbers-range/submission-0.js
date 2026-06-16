class Solution {
    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    rangeBitwiseAnd(left, right) {
        let i = 0
        while (left != right) {
            left >>= 1
            right >>= 1
            i++
        }
        return left << i
    }
}
