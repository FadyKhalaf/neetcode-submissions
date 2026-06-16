class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const charCodeA = 97
        let lastIdx = Array(26).fill(0)

        for(let i = 0; i < S.length; i++) {
            const idx = S.charCodeAt(i) - charCodeA
            lastIdx[idx] = i
        }
        
        let farthest = 0
        let prevIdx = 0
        const ans = []
        for(let i = 0; i < S.length; i++) {
            const idx = S.charCodeAt(i) - charCodeA
            farthest = Math.max(farthest, lastIdx[idx])
            if (i === farthest) {
                ans.push(i - prevIdx + 1)
                prevIdx = i + 1
            }
        }
        return ans
    }
}
