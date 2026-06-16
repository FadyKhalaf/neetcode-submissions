from collections import Counter
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        
        cnt = Counter(s)
        ans = []
        if cnt['1'] > 1:
            ans.append('1' * (cnt['1'] - 1))
            cnt['1'] = 1
        ans.append('0' * cnt['0'])
        if cnt['1']:
            ans.append('1')
        return ''.join(ans)