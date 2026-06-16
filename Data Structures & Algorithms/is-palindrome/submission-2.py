import string

class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        filtered_s = [ch for ch in s if ch.isalnum()]
        left, right = 0, len(filtered_s) - 1

        while left < right:

            if filtered_s[left].lower() != filtered_s[right].lower():
                return False

            left += 1
            right -= 1

        return True
        