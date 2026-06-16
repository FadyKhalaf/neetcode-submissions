from collections import Counter
class Solution:
    def maxDifference(self, s: str) -> int:

        cnt = Counter(s)
        max_odd = None
        min_even = None
        for ch, freq in cnt.most_common():
            if not max_odd and freq % 2 == 1:
                max_odd = freq
            if freq % 2 == 0:
                min_even = freq
        
        return max_odd - min_even
        
