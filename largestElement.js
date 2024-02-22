const findKthLargest = (nums, k) => {
    const heap = nums.slice(0, k);

    for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
        heapifyDown(heap, i);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap[0]) {
            heap[0] = nums[i];
            heapifyDown(heap, 0);
        }
    }

    return heap[0];
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

findKthLargest([3,2,1,5,6,4], k = 2);