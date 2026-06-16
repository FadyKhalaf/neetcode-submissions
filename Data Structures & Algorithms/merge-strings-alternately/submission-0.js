class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0, j = 0, first = true
        let result = ''
        while(i < word1.length && j < word2.length) {
            if (first) {
                result += word1[i++]
            } else {
                result += word2[j++]
            }
            first = !first
        }
        while (i < word1.length) result += word1[i++]
        while (j < word2.length) result += word2[j++]
        return result
    }
}
