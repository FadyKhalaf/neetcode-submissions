class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        cnt = Counter(nums)
        sorted_tuples = sorted(cnt.items(), key=lambda x: x[1], reverse=True)
        return [sorted_tuples[i][0] for i in range(k)]
        