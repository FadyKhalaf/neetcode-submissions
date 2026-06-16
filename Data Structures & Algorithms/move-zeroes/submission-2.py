class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        left = 0
        while left < n:
            if nums[left] != 0: 
                left += 1
                continue
            right = left + 1
            while right < n and nums[right] == 0: right += 1
            if right == n: break
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
        
        