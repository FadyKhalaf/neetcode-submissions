class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        const ROWS = heights.length, COLS = heights[0].length
        const dist = Array.from({length: ROWS}, 
                () => new Array(COLS).fill(Infinity))
        dist[0][0] = 0
        const minHeap = new MinPriorityQueue(a => a[0])
        minHeap.enqueue([0, 0, 0]) //[diff, row, col]
        
        const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]]
        while(!minHeap.isEmpty()) {
            const [diff, row, col] = minHeap.dequeue()
            if (row === ROWS - 1 && col === COLS - 1) return diff
            if (dist[row][col] < diff) continue

            for(const [dr, dc] of directions) {
                const newR = row + dr, newC = col + dc
                if (newR < 0 || newC < 0 || newR >= ROWS || newC >= COLS) continue
                const newDiff = Math.max(
                    diff,
                    Math.abs(heights[row][col] - heights[newR][newC])
                )
                if (newDiff < dist[newR][newC]) {
                    dist[newR][newC] = newDiff
                    minHeap.enqueue([newDiff, newR, newC])
                }
            }
        }
        return 0
    }
}
