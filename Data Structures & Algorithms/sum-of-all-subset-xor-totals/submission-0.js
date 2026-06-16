class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let res = 0
        const recurse = (i, xor) => {
            res += xor
            if (i == nums.length) {
                return
            }
            for(let j = i; j < nums.length; j++) {
                xor ^= nums[j]
                recurse(j+1, xor)
                xor ^= nums[j]
            }

        }
        recurse(0, 0)
        return res
    }
}
