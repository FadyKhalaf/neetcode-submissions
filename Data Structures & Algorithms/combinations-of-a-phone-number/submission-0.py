class Solution:
    def __init__(self):
        self.letters = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
    def letterCombinations(self, digits: str) -> List[str]:

        def recurse(digits: str, cur: List[str]):
            nonlocal ans
            if not digits:
                if cur:
                    ans.append(''.join(cur[:]))
                return
            
            for letter in self.letters[digits[0]]:
                cur.append(letter)
                recurse(digits[1:], cur)
                cur.pop()
        
        ans = []
        recurse(digits, [])
        return ans
        

        