class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        const memo = new Map();
    
        const dfs = (target) => {
            if (target === 0) return 0;
            if (memo.has(target)) {
                return memo.get(target);
            }

            let res = target;
            for (let i = 1; i * i <= target; i++) {
                res = Math.min(res, 1 + dfs(target - i * i));
            }
            memo.set(target, res);
            return res;
        };

        return dfs(n);
    }
}