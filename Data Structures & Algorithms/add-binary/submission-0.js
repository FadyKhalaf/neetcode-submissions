class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a, b) {
        a = a.split('').reverse()
        b = b.split('').reverse()
        
        let curry = 0, ans = []
        let i = 0, j = 0
        while (i < a.length && j < b.length) {
            let sum = Number(a[i]) + Number(b[i]) + curry
            ans.push(String(sum % 2))
            curry = Math.floor(sum / 2)
            i++; j++
        }
        while (i < a.length) {
            let sum = Number(a[i]) + curry
            ans.push(String(sum % 2))
            curry = Math.floor(sum / 2)
            i++
        }
        while (j < b.length) {
            let sum = Number(b[j]) + curry
            ans.push(String(sum % 2))
            curry = Math.floor(sum / 2)
            j++
        }

        if (curry) ans.push("1")
        return ans.reverse().join("")

    }
}
