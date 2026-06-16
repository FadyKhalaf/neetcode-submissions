class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1, right = Math.max(...piles)

        const getDaysToEatAllPiles = (rate) => {
            let hours = 0
            for(let pile of piles) 
                hours += Math.ceil(pile / rate)
            return hours
        }

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2)
            if (getDaysToEatAllPiles(mid) <= h) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}
