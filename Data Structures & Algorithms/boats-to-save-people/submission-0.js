class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b)
        let left = 0, right = people.length - 1
        let ans = 0
        while(left <= right) {
            // can fit in one boat
            if (people[left] + people[right] <= limit) {
                left++; right--
            } else {
                right--
            }
            ans++
        }
        return ans
    }
}
