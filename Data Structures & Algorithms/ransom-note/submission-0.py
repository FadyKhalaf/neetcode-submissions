from collections import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomNoteCnt = Counter(ransomNote)
        magazineCnt = Counter(magazine)

        for c, freq in ransomNoteCnt.items():
            if freq > magazineCnt[c]:
                return False
        
        return True 
        