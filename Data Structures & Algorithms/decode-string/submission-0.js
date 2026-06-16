class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let i = 0
        const helper = () => {
            let k = 0, res = ''
            while(i < s.length) {
                if (!isNaN(s[i])) {
                    k = k * 10 + parseInt(s[i])
                } else if (s[i] === '[') {
                    i++
                    res += helper().repeat(k)
                    k = 0
                } else if (s[i] === ']') {
                    return res
                } else {
                    res += s[i]
                }
                i++
            }
            return res
        }
        return helper()
    }
}
