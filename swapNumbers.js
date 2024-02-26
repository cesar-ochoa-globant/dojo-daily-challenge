function ListNode(val, next = null) {
    return { val, next };
}

function swapPairs(head) {
    const dummy = ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null && current.next.next !== null) {
        const firstNode = current.next;
        const secondNode = current.next.next;

        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        current.next = secondNode;

        current = firstNode;
    }

    return dummy.next;
}

function createLinkedListFromArray(arr) {
    let head = null;
    let current = null;

    for (const val of arr) {
        const newNode = ListNode(val);
        if (!head) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = current.next;
        }
    }

    return head;
}

function convertLinkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const head1 = createLinkedListFromArray([1, 2, 3, 4]);
console.log(convertLinkedListToArray(swapPairs(head1))); 

const head2 = createLinkedListFromArray([]);
console.log(convertLinkedListToArray(swapPairs(head2))); 

const head3 = createLinkedListFromArray([1]);
console.log(convertLinkedListToArray(swapPairs(head3))); 
