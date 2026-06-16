class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:

        heap = [-stone for stone in stones]
        heapq.heapify(heap)

        while len(heap) > 1:
            largest = -heapq.heappop(heap)
            second_largest = -heapq.heappop(heap)

            diff = abs(largest - second_largest)
            
            if diff > 0:
                heapq.heappush(heap, -diff)
            
        return -heap[0] if heap else 0
        