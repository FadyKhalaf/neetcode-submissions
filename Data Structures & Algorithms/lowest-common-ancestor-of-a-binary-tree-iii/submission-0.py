"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""

class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        
        def dfs(root: 'Node'):

            if not root:
                return
            
            if root == p or root == q:
                return root
            
            left = dfs(root.left)
            right = dfs(root.right)

            if left and right:
                return root
            return left if left else right
        
        return dfs(root)