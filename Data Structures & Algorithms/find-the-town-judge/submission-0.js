class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const indegree = {}
        const trustMap = {}
        let mostTrusted = null
        for(const [p, t] of trust) {
            indegree[t] = (indegree[t] || 0) + 1
            if (!mostTrusted || mostTrusted[1] < indegree[t]) {
                mostTrusted = [t, indegree[t]]
            }
            trustMap[p] = t
        }

        const [mostTrustedPerson, trustCnt] = mostTrusted
        if (trustCnt === n - 1 && !trustMap[mostTrustedPerson]) return mostTrustedPerson
        return -1 

    }
}
