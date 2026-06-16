/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0
        let it = head
        while (it) {
            length++
            it = it.next
        }
        let idx = length - n
        if (idx === 0) return head.next
        it = head
        let prev = null
        while(idx > 0) {
            prev = it
            it = it.next
            idx--
        }
        prev.next = it.next
        return head
    }
}
