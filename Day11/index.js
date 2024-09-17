//Problem = https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0,head);
    let left = dummy;
    let right = head;

    while(n > 0 && right !== null){
        right = right.next;
        n -= 1
    }
    while(right !== null) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;

    return dummy.next;
};