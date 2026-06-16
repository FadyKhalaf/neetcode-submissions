# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        
        ans = 0
        def rangeSumBSTHelper(root: Optional[TreeNode]):
            nonlocal ans
            if not root:
                return
            
            if low <= root.val <= high:
                ans += root.val
            
            rangeSumBSTHelper(root.left)
            rangeSumBSTHelper(root.right)
            
        rangeSumBSTHelper(root)
        return ans