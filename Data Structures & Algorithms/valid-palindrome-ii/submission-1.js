class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        const rec = (left, right, k) => {
            if (left >= right) return true
            if (s[left] === s[right]) return rec(left+1, right-1, k)
            if (k === 0) return false
            return rec(left+1, right, k-1) || rec(left, right-1, k-1)
        }
        return rec(0, s.length - 1, 1)
    }
}
