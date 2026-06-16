class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        
        n = len(nums)
        i = 0 
        j = 1
        res = [0] * n
        for k in range(n):
            if nums[k] > 0:
                res[i] = nums[k]
                i += 2
            else:
                res[j] = nums[k]
                j += 2
        return res



