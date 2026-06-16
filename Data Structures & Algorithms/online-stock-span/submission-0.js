class StockSpanner {
    constructor() {
        this.history = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let cnt = 0
        while (this.history.length && this.history[this.history.length - 1][0] <= price) {
            let [_, c] = this.history.pop()
            cnt += c
        }
        this.history.push([price, cnt + 1])
        return cnt + 1
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
