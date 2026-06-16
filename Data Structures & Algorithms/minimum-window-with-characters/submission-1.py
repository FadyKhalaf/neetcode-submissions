from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:

        if len(s) < len(t):
            return ''

        ans = None
        n = len(s)
        left = 0
        t_cnt = Counter(t)
        remaining = len(t)
        s_cnt = Counter()

        for right, ch in enumerate(s):

            if t_cnt[ch] > 0 and s_cnt[ch] < t_cnt[ch]:
                remaining -= 1
            s_cnt[ch] += 1
            
            while remaining == 0:
                if not ans or len(ans) > right - left + 1:
                    ans = s[left:right+ 1]
                left_char = s[left]
                if t_cnt[left_char] > 0 and s_cnt[left_char] <= t_cnt[left_char]:
                    remaining += 1
                s_cnt[left_char] -= 1
                left += 1
        
        return ans if ans else ''
                



        