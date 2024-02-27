function ListNode(val) {
    return { val, next: null };
}

function createCircularLinkedList(n) {
    let head = ListNode(1);
    let current = head;

    for (let i = 2; i <= n; i++) {
        current.next = ListNode(i);
        current = current.next;
    }
    current.next = head;

    return head;
}

function findTheWinner(n, k) {
    let head = createCircularLinkedList(n);
    let current = head;

    while (current.next !== current) {
        for (let i = 1; i < k; i++) {
            current = current.next;
        }
        current.val = current.next.val;
        current.next = current.next.next;
    }

    return current.val;
}

console.log(findTheWinner(5, 2)); 
console.log(findTheWinner(6, 5)); 
