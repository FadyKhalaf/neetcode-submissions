class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        cnt = Counter()
        left = 0
        longest = 0
        for right in range(len(s)):
            cnt[s[right]] += 1
            while cnt[s[right]] > 1:
                cnt[s[left]] -= 1
                left += 1
            longest = max(longest, right - left + 1)
        return longest

        