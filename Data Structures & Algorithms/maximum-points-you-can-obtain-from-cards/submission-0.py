class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        
        if k >= len(cardPoints):
            return sum(cardPoints)

        window = sum(cardPoints[-k:])
        ans = window

        for i in range(k):
            window += cardPoints[i] - cardPoints[i - k]
            ans = max(ans, window)
        
        return ans

