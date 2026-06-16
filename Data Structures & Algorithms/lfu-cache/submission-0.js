class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} prev
     * @param {ListNode} next
     */
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.left = new ListNode(0);
        this.right = new ListNode(0);
        this.left.next = this.right;
        this.right.prev = this.left;
        this.map = new Map();
    }

    /**
     * @return {number}
     */
    length() {
        return this.map.size;
    }

    /**
     * @param {number} val
     */
    pushRight(val) {
        const node = new ListNode(val, this.right.prev, this.right);
        this.map.set(val, node);
        this.right.prev.next = node;
        this.right.prev = node;
    }

    /**
     * @param {number} val
     */
    pop(val) {
        if (this.map.has(val)) {
            const node = this.map.get(val);
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
            this.map.delete(val);
        }
    }

    /**
     * @return {number}
     */
    popLeft() {
        const res = this.left.next.val;
        this.pop(res);
        return res;
    }

    /**
     * @param {number} val
     */
    update(val) {
        this.pop(val);
        this.pushRight(val);
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.lfuCount = 0;
        this.valMap = new Map();
        this.countMap = new Map();
        this.listMap = new Map();
        this.listMap.set(0, new LinkedList());
    }

    /**
     * @param {number} key
     */
    counter(key) {
        const count = this.countMap.get(key);
        this.countMap.set(key, count + 1);

        this.listMap.get(count).pop(key);

        if (!this.listMap.has(count + 1)) {
            this.listMap.set(count + 1, new LinkedList());
        }
        this.listMap.get(count + 1).pushRight(key);

        if (count === this.lfuCount && this.listMap.get(count).length() === 0) {
            this.lfuCount++;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.valMap.has(key)) {
            return -1;
        }
        this.counter(key);
        return this.valMap.get(key);
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;

        if (!this.valMap.has(key) && this.valMap.size === this.capacity) {
            const toRemove = this.listMap.get(this.lfuCount).popLeft();
            this.valMap.delete(toRemove);
            this.countMap.delete(toRemove);
        }

        this.valMap.set(key, value);
        if (!this.countMap.has(key)) {
            this.countMap.set(key, 0);
            this.listMap.get(0).pushRight(key);
            this.lfuCount = 0;
        }
        this.counter(key);
    }
}