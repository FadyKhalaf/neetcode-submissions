class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        
        stack = [] # (index, height)
        maxArea = 0

        for i, height in enumerate(heights):
            start = i
            while stack and stack[-1][1] > height:
                j, h = stack.pop()
                maxArea = max(maxArea, (i - j) * h)
                start = j
            stack.append((start, height))
        
        while stack:
            j, h = stack.pop()
            maxArea = max(maxArea, (len(heights) - j) * h)
        
        return maxArea