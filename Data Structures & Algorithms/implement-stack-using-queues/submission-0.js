class MyStack {
    constructor() {
        this.q = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q.push(x);
   
        for (let i = this.q.size() - 1; i > 0; i--) {
            this.q.push(this.q.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q.isEmpty();
    }
}