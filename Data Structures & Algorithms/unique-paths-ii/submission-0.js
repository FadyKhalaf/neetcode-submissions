class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const ROWS = grid.length, COLS = grid[0].length
        const dp = Array.from({length: ROWS}, () => new Array(COLS).fill(-1))
        dp[ROWS-1][COLS-1] = 1 

        const isValid = (r, c) => {
            return r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c] === 0
        }
        const dfs = (r, c) => {
            if (!isValid(r, c)) return 0
            if (dp[r][c] !== -1) return dp[r][c]

            dp[r][c] = dfs(r+1, c) + dfs(r, c+1)
            return dp[r][c]
        }

        return dfs(0, 0)
    }
}
