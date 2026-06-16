from collections import Counter
class Solution:
    def findLucky(self, arr: List[int]) -> int:
        
        counter = Counter(arr)
        max_num = -1
        for num, freq in counter.items():
            print(num, freq)
            if num == freq:
                max_num = max(max_num, num)
        return max_num
