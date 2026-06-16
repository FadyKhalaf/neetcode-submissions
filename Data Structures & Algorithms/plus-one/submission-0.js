class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1, ans = []
        digits.reverse()
        for(let digit of digits) {
            let sum = digit + carry
            carry = Math.floor(sum / 10)
            ans.push(sum % 10)
        }
        if (carry) ans.push(carry)
        ans.reverse()
        return ans
    }
}
