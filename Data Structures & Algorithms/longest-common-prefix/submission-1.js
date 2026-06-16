class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let minLength = Infinity
        strs.forEach(str => minLength = Math.min(minLength, str.length))
        let longestPrefix = ''
        console.log(minLength)
        for(let i = 0; i < minLength; i++) {
            let substr = strs[0].slice(0, i+1)
            let isCommonPrefix = strs.every(str => str.indexOf(substr) !== -1)
            if (isCommonPrefix) {
                longestPrefix = substr
            }
        }
        return longestPrefix
    }
}
