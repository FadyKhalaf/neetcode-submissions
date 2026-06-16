class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity
        let cur = 0
        for(let i =0; i < nums.length; i++) {
            cur = Math.max(cur + nums[i], nums[i])
            max = Math.max(max, cur)
        }
        return max
    }
}
