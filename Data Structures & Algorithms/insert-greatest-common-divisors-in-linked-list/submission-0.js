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
     * @return {ListNode}
     */
    insertGreatestCommonDivisors(head) {
        if (!head) return null;
        const gcd = (a, b) => {
            while (b > 0) {
                [a, b] = [b, a % b];
            }
            return a;
        };

        let cur = head;

        while (cur.next) {
            const n1 = cur.val, n2 = cur.next.val;
            const gcdValue = gcd(n1, n2);
            const newNode = new ListNode(gcdValue, cur.next);
            cur.next = newNode;
            cur = newNode.next;
        }

        return head;
    }
}