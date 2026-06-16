class Solution:
    def __checkPalindromeHelper(self, s: str, l: int, r: int):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if (r - l + 1) > self.resLen:
                self.res = s[l : r + 1]
                self.resLen = r - l + 1
            l -= 1
            r += 1
    def longestPalindrome(self, s: str) -> str:
        self.res = ""
        self.resLen = 0

        for i in range(len(s)):
            # odd length
            l, r = i, i
            self.__checkPalindromeHelper(s, l, r)

            # even length
            l, r = i, i + 1
            self.__checkPalindromeHelper(s, l, r)

        return self.res
