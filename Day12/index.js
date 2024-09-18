//Problem = https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let current = dummy;
    let carry = 0;

    while(l1 || l2 || carry ){
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;

        //new digit
        let val = value1 + value2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        current.next = new ListNode(val)

        //updating the pointers
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null
    }
    return dummy.next
};