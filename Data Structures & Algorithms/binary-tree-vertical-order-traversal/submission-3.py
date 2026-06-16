# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import defaultdict
class Solution:
    def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        columns = defaultdict(list)
        def postorder(root: Optional[TreeNode], row, col):
            nonlocal columns
            if not root:
                return
            columns[col].append((row, root.val))
            postorder(root.left, row + 1, col - 1)
            postorder(root.right, row + 1, col + 1)
        postorder(root, 0, 0)
        res = []
        for col in sorted(columns):
            col_vals = sorted(columns[col], key=lambda x: x[0])
            res.append([val for _, val in col_vals])
        return res
