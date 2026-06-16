# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:

        def dfs(root: Optional[TreeNode], cur: List[int]):
            nonlocal ans
            if not root:
                return

            cur = cur + [str(root.val)]
            
            if not root.left and not root.right:
                if cur:
                    ans += int(''.join(cur))
                return
            
            dfs(root.left, cur)
            dfs(root.right, cur)
        
        ans = 0
        dfs(root, [])
        return ans

        