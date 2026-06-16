class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 1, right = x
        let res
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (mid * mid === x) return mid
            else if (mid * mid < x) {left = mid + 1; res = x}
            else right = mid - 1
        }
        return right 
    }
}
