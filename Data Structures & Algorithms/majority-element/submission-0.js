class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freqMap = nums.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1
            return acc
        }, {})
        const entries = Object.entries(freqMap).sort((a, b) => b[1] - a[1])
        return entries[0][0]
    }
}
