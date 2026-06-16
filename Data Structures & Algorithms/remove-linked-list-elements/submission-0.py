# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        
        def removeElementsRec(head: Optional[ListNode]):

            if not head:
                return None
            
            nextRemoved = removeElementsRec(head.next)
            head.next = nextRemoved
            return head if head.val != val else nextRemoved
        
        return removeElementsRec(head)