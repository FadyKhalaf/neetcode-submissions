class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        const n = ratings.length
        const ans = new Array(n).fill(1)
        for(let i = 1; i < n; i++) {
            if(ratings[i-1] < ratings[i]) {
                ans[i] = ans[i-1] + 1
            }
        }
        for(let i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i+1]) {
                ans[i] = Math.max(ans[i], ans[i+1] + 1)
            }
        }
        return ans.reduce((acc, candies) => acc += candies, 0)
    }
}
