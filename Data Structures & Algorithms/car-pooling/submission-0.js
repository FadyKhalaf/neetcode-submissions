class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        const availableTrips = new MinPriorityQueue(a => a[1])
        const tripsInProgress = new MinPriorityQueue(a => a[1]) 
        for(const trip of trips) {
            availableTrips.enqueue(trip)
        }

        let curPassengers = 0
        while (!availableTrips.isEmpty()) {
            const [passengers, start, end] = availableTrips.dequeue()
            tripsInProgress.enqueue([passengers, start, end])
            curPassengers += passengers
            
            while (!tripsInProgress.isEmpty() && tripsInProgress.front()[2] <= start) {
                const [passengers2, , ] = tripsInProgress.dequeue()
                curPassengers -= passengers2
            } 

            if (curPassengers > capacity) return false
        }
        return true
    }
}
