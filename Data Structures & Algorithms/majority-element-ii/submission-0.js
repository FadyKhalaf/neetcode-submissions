class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const countMap = new Map()
        const n = nums.length
        for(const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1)
        }

        const ans = []
        for(let [key, freq] of countMap.entries()) {
            if (freq > n / 3) {
                ans.push(key)
            }
        }
        return ans
    }
}
