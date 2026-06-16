class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const idxMap = new Map()
        for(const [idx, num] of nums.entries()) {
            if (idxMap.has(num)) {
                const prev = idxMap.get(num)
                if (idx - prev <= k) return true 
            }
            idxMap.set(num, idx)
        }
        return false
    }
}
