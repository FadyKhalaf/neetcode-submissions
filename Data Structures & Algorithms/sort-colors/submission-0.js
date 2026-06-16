class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zeros = 0, twos = nums.length - 1
        let i = 0
        while (i < nums.length) {
            if (nums[i] === 0 && i > zeros) {
                nums[i] = nums[zeros]
                nums[zeros++] = 0
            } 
            else if (nums[i] === 2 && i < twos) {
                nums[i] = nums[twos]
                nums[twos--] = 2
            } else {
                i++
            }
        }
    }
}
