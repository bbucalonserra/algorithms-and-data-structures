/** Class representing the queue data structure, therefore, with its main property as being a FIFO (First In First Out).
 * The queue has a fixed capacity, so that the history it holds never grows beyond what the target hardware
 * described in the coursework PDF could hold.
 */
export class Queue {
    constructor(capacity = 10) {
        /**
         * Create an empty Array with one property called items, plus a fixed capacity.
         */
        this.items = new Array();
        this.capacity = capacity;
    }

    /**
     * Add an item to the back of the queue. If the queue is already at capacity, the oldest item (the one at
     * the front) is discarded first, so the queue never grows beyond its fixed capacity.
     * @return {void}
     * @example
     * const queue = new Queue(2);
     * queue.enqueue('A 2 =');
     * queue.enqueue('B 3 =');
     * queue.enqueue('A B *'); // discards 'A 2 =', items is now ['B 3 =', 'A B *']
     */
    enqueue(value) {
        if (this.items.length >= this.capacity) {
            this.dequeue();
        }
        this.items.push(value);
    }

    /**
     * Remove and return the item at the front of the queue.
     * @return {T | undefined}
     * @example
     * const queue = new Queue();
     * queue.enqueue('3 4 +');
     * queue.dequeue(); // returns '3 4 +'
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * View the item at the front of the queue without removing it.
     * @return {T | undefined}
     * @example
     * const queue = new Queue();
     * queue.enqueue('3 4 +');
     * queue.peek(); // returns '3 4 +'
     */
    peek() {
        return this.items[0];
    }

    /**
     * Check if the queue is empty.
     * @return {boolean}
     * @example
     * const queue = new Queue();
     * queue.isEmpty(); // returns true
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Prints the queue.
     * @return {array}
     * @example
     * const queue = new Queue();
     * queue.enqueue('3 4 +');
     * queue.printQueue(); // returns ['3 4 +']
     */
    printQueue() {
        return this.items;
    }
}
