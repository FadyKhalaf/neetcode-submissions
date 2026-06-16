class UnionFind {
    /**
     * @constructor
     * @param {number} n
     */
    constructor(n) {
        this.Parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.Size = Array(n + 1).fill(1);
        this.n = n;
    }

    /**
     * @param {number} node
     * @return {number}
     */
    find(node) {
        if (this.Parent[node] !== node) {
            this.Parent[node] = this.find(this.Parent[node]);
        }
        return this.Parent[node];
    }

    /**
     * @param {number} u
     * @param {number} v
     * @return {boolean}
     */
    union(u, v) {
        let pu = this.find(u);
        let pv = this.find(v);
        if (pu === pv) return false;
        this.n--;
        if (this.Size[pu] < this.Size[pv]) {
            [pu, pv] = [pv, pu];
        }
        this.Size[pu] += this.Size[pv];
        this.Parent[pv] = pu;
        return true;
    }

    /**
     * @return {number}
     */
    isConnected() {
        return this.n === 1;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canTraverseAllPairs(nums) {
        const n = nums.length;
        const uf = new UnionFind(n);
        const factor_index = new Map();

        for (let i = 0; i < n; i++) {
            let num = nums[i];
            let f = 2;
            while (f * f <= num) {
                if (num % f === 0) {
                    if (factor_index.has(f)) {
                        uf.union(i, factor_index.get(f));
                    } else {
                        factor_index.set(f, i);
                    }
                    while (num % f === 0) {
                        num = Math.floor(num / f);
                    }
                }
                f++;
            }
            if (num > 1) {
                if (factor_index.has(num)) {
                    uf.union(i, factor_index.get(num));
                } else {
                    factor_index.set(num, i);
                }
            }
        }

        return uf.isConnected();
    }
}