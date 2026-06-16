class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        if (str1.length < str2.length) {
            [str1, str1] = [str2, str1]
        }
        let gcd = ''
        for(let i = 0; i < str2.length; i++) {
            const substr = str2.slice(0, i+1)
            const repeats1 = Math.floor(str1.length / substr.length)
            const repeats2 = Math.floor(str2.length / substr.length)
            if (substr.repeat(repeats1) === str1 && substr.repeat(repeats2) === str2) {
                gcd = substr
            }
        }
        return gcd
    }
}
