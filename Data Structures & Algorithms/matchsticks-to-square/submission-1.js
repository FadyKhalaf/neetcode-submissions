class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const sum = matchsticks.reduce((a, b) => a += b, 0)
        if (sum % 4 !== 0) return false
        const targetLength = Math.floor(sum / 4)
        const sides = new Array(4).fill(0)
        matchsticks.sort((a, b) => b - a)
        const backtrack = (idx) => {
            if (idx === matchsticks.length) return true
            for(let i = 0; i < sides.length; i++) {
                if (sides[i] + matchsticks[idx] <= targetLength) {
                    sides[i] += matchsticks[idx]
                    if (backtrack(idx+1)) return true
                    sides[i] -= matchsticks[idx]
                }
            }
            return false
        }   

        return backtrack(0)
    }
}
