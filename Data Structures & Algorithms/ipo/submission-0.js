class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const n = profits.length;
        const indices = Array.from({ length: n }, (_, i) => i);
        indices.sort((a, b) => capital[a] - capital[b]);
        
        const maxProfit = new MaxPriorityQueue();
        let idx = 0;
        for (let i = 0; i < k; i++) {
            while (idx < n && capital[indices[idx]] <= w) {
                maxProfit.enqueue(profits[indices[idx]]);
                idx++;
            }
            if (maxProfit.isEmpty()) {
                break;
            }
            w += maxProfit.dequeue();
        }
        
        return w;
    }
}