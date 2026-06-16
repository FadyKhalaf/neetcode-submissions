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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        const dummy = new ListNode(-1, head)
        let leftPrev = dummy, cur = head
        for(let i = 0; i < left - 1; i++) {
            leftPrev = cur
            cur = cur.next
        }

        let prev = null
        for(let i = 0; i < right - left + 1; i++) {
            const next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        leftPrev.next.next = cur
        leftPrev.next = prev
        return dummy.next
    }
}