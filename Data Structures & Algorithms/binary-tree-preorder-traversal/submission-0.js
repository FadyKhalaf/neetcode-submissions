/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        const order = []
        const preorder = (root) => {
            if (!root) return
            order.push(root.val)
            preorder(root.left)
            preorder(root.right)
        }
        preorder(root)
        return order
    }
}
