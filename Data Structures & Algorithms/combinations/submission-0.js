class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        
        let res = []
        const recurse = (i, arr) => {
            if (arr.length === k) {
                res.push([...arr])
                return 
            }

            for(let j = i; j <= n; j++) {
                arr.push(j)
                recurse(j+1, arr)
                arr.pop()
            }
        }
        recurse(1, [])
        return res
    }
}
