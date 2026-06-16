class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let prev = null, j = 0
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] != prev) {
                nums[j] = nums[i]
                prev = nums[j]
                j++
            }
        }
        return j
    }
}
