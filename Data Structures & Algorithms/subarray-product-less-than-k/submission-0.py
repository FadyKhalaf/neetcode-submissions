class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        
        ans = 0
        left = 0
        product = 1

        for right in range(len(nums)):
            product *= nums[right]
            while left <= right and product >= k:
                product //= nums[left]
                left += 1
            
            ans += (right - left + 1)
        return ans
