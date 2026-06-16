class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:

        nums.sort()
        left = 0
        ans = float('inf')
        for right in range(k - 1, len(nums)):

            if right - left + 1 > k:
                left += 1
            ans = min(ans, nums[right] - nums[left])
        
        return ans 
        