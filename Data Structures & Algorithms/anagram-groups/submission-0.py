from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagrams = defaultdict(list)
        for s in strs:
            sortedS = sorted(s)
            anagrams[''.join(sortedS)].append(s)
        
        return anagrams.values()
        