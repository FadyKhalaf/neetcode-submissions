class Solution {
    /**
     * @param {number[]} stoneValue
     * @return {string}
     */
    stoneGameIII(stoneValue) {
        const n = stoneValue.length;
        const dp = new Array(n);

        const dfs = (i) => {
            if (i >= n) return 0;
            if (dp[i] !== undefined) return dp[i];

            let res = -Infinity, total = 0;
            for (let j = i; j < Math.min(i + 3, n); j++) {
                total += stoneValue[j];
                res = Math.max(res, total - dfs(j + 1));
            }

            dp[i] = res;
            return res;
        };

        const result = dfs(0);
        if (result === 0) return "Tie";
        return result > 0 ? "Alice" : "Bob";
    }
}