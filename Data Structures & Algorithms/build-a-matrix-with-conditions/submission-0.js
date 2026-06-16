class Solution {
    /**
     * @param {number} k
     * @param {number[][]} rowConditions
     * @param {number[][]} colConditions
     * @return {number[][]}
     */
    buildMatrix(k, rowConditions, colConditions) {
        const rowOrder = this.topoSort(k, rowConditions);
        if (rowOrder.length !== k) return [];

        const colOrder = this.topoSort(k, colConditions);
        if (colOrder.length !== k) return [];

        const res = Array.from({ length: k }, () => Array(k).fill(0));
        const colIndex = Array(k + 1).fill(0);

        for (let i = 0; i < k; i++) {
            colIndex[colOrder[i]] = i;
        }

        for (let i = 0; i < k; i++) {
            res[i][colIndex[rowOrder[i]]] = rowOrder[i];
        }

        return res;
    }

    /**
     * @param {number} k
     * @param {number[][]} edges
     * @return {number[]}
     */
    topoSort(k, edges) {
        const indegree = Array(k + 1).fill(0);
        const adj = Array.from({ length: k + 1 }, () => []);

        for (const [u, v] of edges) {
            adj[u].push(v);
            indegree[v]++;
        }

        const queue = new Queue();
        const order = [];

        for (let i = 1; i <= k; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        while (!queue.isEmpty()) {
            const node = queue.pop();
            order.push(node);
            for (const nei of adj[node]) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    queue.push(nei);
                }
            }
        }

        return order.length === k ? order : [];
    }
}