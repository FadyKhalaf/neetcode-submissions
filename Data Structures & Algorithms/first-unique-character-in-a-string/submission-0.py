from collections import Counter
class Solution:
    def firstUniqChar(self, s: str) -> int:

        counter =  Counter(s)
        for idx, ch in enumerate(s):
            if counter[ch] == 1:
                return idx
        
        return -1
        
        