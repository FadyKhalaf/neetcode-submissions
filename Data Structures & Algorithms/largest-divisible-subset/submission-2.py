class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums.sort()
        n = len(nums)
        dp = [[1, -1] for _ in range(n)]  # dp[i] = [maxLen, prevIdx]

        max_len, start_index = 1, 0

        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0 and dp[j][0] + 1 > dp[i][0]:
                    dp[i][0] = dp[j][0] + 1
                    dp[i][1] = j

            if dp[i][0] > max_len:
                max_len = dp[i][0]
                start_index = i

        subset = []
        while start_index != -1:
            subset.append(nums[start_index])
            start_index = dp[start_index][1]
        return subset