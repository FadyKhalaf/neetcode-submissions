class MyHashSet {
    constructor() {
        this.hash = {}
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.hash[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.hash[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.hash[key] === true
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
