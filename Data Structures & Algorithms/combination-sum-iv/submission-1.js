class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        nums.sort((a, b) => a - b);
        const memo = { 0 : 1 };

        const dfs = (total) => {
            if (memo[total] !== undefined) {
                return memo[total];
            }

            let res = 0;
            for (let num of nums) {
                if (total < num) break;
                res += dfs(total - num);
            }
            memo[total] = res;
            return res;
        };

        return dfs(target);
    }
}