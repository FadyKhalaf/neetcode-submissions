class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        cnt_s = collections.Counter(s)
        cnt_t = collections.Counter(t)

        return cnt_s == cnt_t