class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        const ROWS = matrix.length, COLS = matrix[0].length;
        const res = Array.from({ length: COLS }, () => Array(ROWS).fill(0));

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                res[c][r] = matrix[r][c];
            }
        }

        return res;
    }
}