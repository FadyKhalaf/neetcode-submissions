class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const dfs = (i, open) => {
            if (open < 0) return false
            if (i === s.length) return open === 0
            if (memo[i][open] !== null) return memo[i][open]

            let result
            if (s[i] === '(') result = dfs(i+1, open + 1)
            else if (s[i] === ')') result = dfs(i+1, open - 1)
            else 
                result = dfs(i+1, open) || dfs(i+1, open + 1) || dfs(i+1, open - 1)
            memo[i][open] = result
            return result
        }
        const n = s.length
        const memo = Array.from({length: n+2}, 
            () => new Array(n+1).fill(null))
        return dfs(0, 0)
    }
}
