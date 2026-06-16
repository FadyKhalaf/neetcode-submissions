class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globMax = nums[0], globMin = nums[0]
        let curMax = 0, curMin = 0, total = 0
        for(const num of nums) {
            total += num
            curMax = Math.max(curMax + num, num)
            curMin = Math.min(curMin + num, num)
            globMax = Math.max(globMax, curMax)
            globMin = Math.min(globMin, curMin)
        }

        if (total < 0) return globMax
        return Math.max(globMax, total - globMin)
        
    }
}
