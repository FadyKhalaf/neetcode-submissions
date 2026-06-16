/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomListHelper(Node head, Map<Node, Node> memo) {
        if (head == null) return null;
        if (memo.get(head) != null) return memo.get(head);
        Node copy = new Node(head.val);
        memo.put(head, copy);
        copy.next = this.copyRandomListHelper(head.next, memo);
        copy.random = this.copyRandomListHelper(head.random, memo);
        return copy;
    }
    public Node copyRandomList(Node head) {
        Map<Node, Node> memo = new HashMap<>();
        return this.copyRandomListHelper(head, memo);
    }
}
