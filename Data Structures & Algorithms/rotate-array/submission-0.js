class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k %= n;
        let count = 0;
        
        for (let start = 0; count < n; start++) {
            let current = start;
            let prev = nums[start];
            do {
                const nextIdx = (current + k) % n;
                const temp = nums[nextIdx];
                nums[nextIdx] = prev;
                prev = temp;
                current = nextIdx;
                count++;
            } while (start !== current);
        }
    }
}