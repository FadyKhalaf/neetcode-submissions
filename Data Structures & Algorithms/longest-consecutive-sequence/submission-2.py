class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        if not nums:
            return 0

        smallest, largest = min(nums), max(nums)

        nums_set = set(nums)
        streak = 1
        prev = smallest
        ans = 1
        for i in range(smallest+1, largest+1):
            if i in nums_set:
                streak += 1
            else:
                streak = 0
            prev = i
            ans = max(ans, streak)
        
        return ans


        