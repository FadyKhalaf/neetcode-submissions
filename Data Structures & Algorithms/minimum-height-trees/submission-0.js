class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if (n === 1) return [0];

        const adj = Array.from({ length: n }, () => []);

        for (const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const edgeCnt = Array(n).fill(0);
        const leaves = new Queue();

        for (let i = 0; i < n; i++) {
            edgeCnt[i] = adj[i].length;
            if (adj[i].length === 1) {
                leaves.push(i);
            }
        }

        while (!leaves.isEmpty()) {
            if (n <= 2) return leaves.toArray();
            const size = leaves.size();
            for (let i = 0; i < size; i++) {
                const node = leaves.pop();
                n--;
                for (const nei of adj[node]) {
                    edgeCnt[nei]--;
                    if (edgeCnt[nei] === 1) {
                        leaves.push(nei);
                    }
                }
            }
        }

        return [];
    }
}