const findKthLargest = (nums, k) => {
    const heap = [];

    nums.forEach(num => {
        if (heap.length < k) {
            heap.push(num);
            heapifyUp(heap, heap.length - 1);
        } else {
            if (num > heap[0]) {
                heap[0] = num;
                heapifyDown(heap, 0);
            }
        }
    });

    return heap[0];
};

const heapifyUp = (heap, index) => {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] <= heap[index]) break;
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
    }
};

const heapifyDown = (heap, index) => {
    const n = heap.length;
    while (index < n) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallestIndex = index;
        if (leftChildIndex < n && heap[leftChildIndex] < heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }
        if (rightChildIndex < n && heap[rightChildIndex] < heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }
        if (smallestIndex === index) break;
        [heap[index], heap[smallestIndex]] = [heap[smallestIndex], heap[index]];
        index = smallestIndex;
    }
};
