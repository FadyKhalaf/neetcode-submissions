class Solution {
    /**
     * @param {number[]} piles
     * @return {number}
     */
    stoneGameII(piles) {
        const n = piles.length;
        const dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));

        const suffixSum = Array(n).fill(0);
        suffixSum[n - 1] = piles[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            suffixSum[i] = piles[i] + suffixSum[i + 1];
        }

        const dfs = (i, M) => {
            if (i === n) return 0;
            if (dp[i][M] !== -1) return dp[i][M];

            let res = 0;
            for (let X = 1; X <= 2 * M; X++) {
                if (i + X > n) break;
                res = Math.max(res, suffixSum[i] - dfs(i + X, Math.max(M, X)));
            }

            return dp[i][M] = res;
        };

        return dfs(0, 1);
    }
}