class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const g = gcd(str1.length, str2.length);

        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str1[i % g]) {
                return "";
            }
        }

        for (let i = 0; i < str2.length; i++) {
            if (str2[i] !== str1[i % g]) {
                return "";
            }
        }

        return str1.slice(0, g);
    }
}