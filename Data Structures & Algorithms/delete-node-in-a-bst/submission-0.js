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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(!root) return null

        if (root.val === key) {
            if (root.right) {
                const rightSubtree = root.right
                const leftSubtree = root.left
                root.left = null
                root.right = null
                rightSubtree.left = leftSubtree
                return rightSubtree
            } else {
                const leftSubtree = root.left
                root.left = null
                return leftSubtree
            }
        }

        root.left = this.deleteNode(root.left, key)
        root.right = this.deleteNode(root.right, key)

        return root

    }
}
