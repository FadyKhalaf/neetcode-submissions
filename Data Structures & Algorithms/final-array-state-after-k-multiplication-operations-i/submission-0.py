from heapq import heapify, heappush, heappop
class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        
        heap = [(num, idx) for idx, num in enumerate(nums)]
        heapify(heap)

        while k:
            num, idx = heappop(heap)
            heappush(heap, (num * multiplier, idx))
            k -= 1
        return [entry[0] for entry in sorted(heap, key=lambda x: x[1])] 
