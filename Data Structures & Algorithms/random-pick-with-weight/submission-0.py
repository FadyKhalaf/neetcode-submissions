import random
from bisect import bisect_left

class Solution:

    def __init__(self, w: List[int]):
        total = sum(w)
        cnt = len(w)
        self.values = []
        self.mp = {}
        self.n = len(w)
        for idx, a in enumerate(w):
            val = a / total * 100
            self.values.append(val)
            self.mp[val] = idx
        self.values.sort()

    def pickIndex(self) -> int:
        rand = random.randint(0, 100)
        idx = min(bisect_left(self.values, rand), self.n - 1)
        return self.mp[self.values[idx]]


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()