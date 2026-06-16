class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let xor = nums[0]
        for (let i = 1; i < nums.length; i++) {
            xor ^= nums[i]
        }
        return xor
    }
}
