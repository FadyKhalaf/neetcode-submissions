class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        if (target < nums[0]) return 0
        if (target > nums[nums.length - 1]) return nums.length
        let left = 0, right = nums.length - 1
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) return mid
            if (nums[mid] < target) left = mid + 1
            else right = mid
        }
        return left
    }
}
