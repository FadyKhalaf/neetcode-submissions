/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        const dfs = (n, r, c) => {
            if (n === 1) {
                return new Node(grid[r][c] === 1, true);
            }

            const mid = Math.floor(n / 2);
            const topLeft = dfs(mid, r, c);
            const topRight = dfs(mid, r, c + mid);
            const bottomLeft = dfs(mid, r + mid, c);
            const bottomRight = dfs(mid, r + mid, c + mid);

            if (topLeft.isLeaf && topRight.isLeaf &&
                bottomLeft.isLeaf && bottomRight.isLeaf &&
                topLeft.val === topRight.val &&
                topLeft.val === bottomLeft.val &&
                topLeft.val === bottomRight.val) {
                return new Node(topLeft.val, true);
            }

            return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
        };

        return dfs(grid.length, 0, 0);
    }
}