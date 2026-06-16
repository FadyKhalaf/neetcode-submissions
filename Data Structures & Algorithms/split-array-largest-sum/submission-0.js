class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {

        const canSplit = (largest) => {
            let subArr = 1, curSum = 0
            for(const num of nums) {
                curSum += num
                if (curSum > largest) {
                    subArr++
                    if(subArr > k) return false
                    curSum = num
                }
            }
            return true
        }

        let left = Math.max(...nums)
        let right = nums.reduce((acc, num) => acc += num, 0)
        let res = right

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (canSplit(mid)) {
                res = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return res
    }
}
