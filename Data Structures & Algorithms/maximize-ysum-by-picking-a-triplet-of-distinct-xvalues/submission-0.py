class Solution:
    def maxSumDistinctTriplet(self, x: List[int], y: List[int]) -> int:
        
        tuples = [(num, idx) for idx, num in enumerate(y)]
        tuples.sort(reverse=True)
        ans = []
        total = 0
        for num, idx in tuples:
            if not ans or x[idx] not in ans:
                ans.append(x[idx])
                total += num
            
            if len(ans) == 3:
                return total
        
        return -1

