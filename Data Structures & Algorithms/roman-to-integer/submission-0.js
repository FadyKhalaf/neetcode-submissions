class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const symbolMap = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
            XL: 40,
            L: 50,
            XC: 90,
            C: 100,
            CD: 400,
            D: 500,
            CM: 900,
            M: 1000
        }
        let i = 0
        let ans = 0
        while (i < s.length) {
            if (symbolMap[s.slice(i, i+2)]) {
                ans += symbolMap[s.slice(i, i+2)]
                i += 2
            } else {
                ans += symbolMap[s[i]]
                i += 1
            }
        }
        return ans
    }
}
