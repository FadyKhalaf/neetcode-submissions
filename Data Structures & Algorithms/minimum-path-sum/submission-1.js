class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const ROWS = grid.length, COLS = grid[0].length
        const minHeap = new MinPriorityQueue(x => x[0])
        const dp = new Map()
        dp.set(`0, 0`, grid[0][0])

        minHeap.enqueue([grid[0][0], 0, 0])
        const dirs = [[0, 1], [1, 0]]
        while(!minHeap.isEmpty()) {
            const [cst, r, c] = minHeap.dequeue()
            if (r === ROWS - 1 && c === COLS - 1) return cst

            for (const [dr, dc] of dirs) {
                const newR = r + dr, newC = c + dc
                if (newR < 0 || newR >= ROWS || 
                    newC < 0 || newC >= COLS || dp.has(`${newR}, ${newC}`)) continue
                const newCst = cst + grid[newR][newC]
                dp.set(`${newR}, ${newC}`, newCst)
                minHeap.enqueue([newCst, newR, newC])
            }
        }
        return -1
    }
}
