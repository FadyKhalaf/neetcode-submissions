class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const visited = new Set(deadends)
        if (visited.has("0000")) return -1

        const getChildren = (lock) => {
            const children = []
            for(let i = 0; i < 4; i++) {
                const up = lock.slice(0, i) + ((+lock[i] + 1) % 10) + lock.slice(i+1)
                const down = lock.slice(0, i) + ((+lock[i] - 1 + 10) % 10) + lock.slice(i+1)
                children.push(up, down)
            }
            return children
        }

        const queue = new Queue([["0000", 0]])
        visited.add("0000")
        while(!queue.isEmpty()) {
            const [lock, turns] = queue.pop()
            if(lock === target) return turns

            for(const child of getChildren(lock)) {
                if(visited.has(child)) continue
                visited.add(child)
                queue.push([child, turns + 1])
            }
        }

        return -1
    }
}