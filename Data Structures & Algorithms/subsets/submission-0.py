class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:

        def dfs(idx: int, cur: List[int]):
            nonlocal ans
            
            if idx >= len(nums):
                ans.append(cur[:])
                return 
            
            cur.append(nums[idx])
            dfs(idx + 1, cur)
            cur.pop()

            dfs(idx + 1, cur)
        
        ans = []
        dfs(0, [])
        return ans
        