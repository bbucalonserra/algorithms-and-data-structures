/** Class representing the stack data structure, therefore, with its main property as bein a LIFO (Last In First Out). */

export class Stack {
    constructor() {
        /**
        * Create an empty Array with one property called items (hence to check the items from the array, must do: 
        * object.items). An Array is a native JavaScript object, where they are mutable, pass-by-reference (the
        * objects are not duplicated, both references the same memory location), dynamic (grow and reduce according
        * to needs), and heterogeneous (can store any data type simultaneously)
        */
        this.items = new Array();
    }

    /**
     * Push an item to the array.
     * @return {void}
     * @example
     * stack.push(3); // items is now [3]
     */
    push(value) {
        this.items.push(value);
    }

    /**
     * Pop an item from the array.
     * @return {T | undefined}
     * @example
     * stack.push(3);
     * stack.pop(); // returns 3, items is now []
     */
    pop() {
        return this.items.pop();
    }

    /**
     * View the last item from the array without removing it, representig the top of the stack.
     * @returns {T | undefined}
     * @example
     * stack.push(3);
     * stack.peek(); // returns 3, items is still [3]
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * Check if the stack is empty.
     * @return {boolean}
     * @example
     * stack.isEmpty(); // returns true
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Prints the stack.
     * @return {array}
     * @example
     * stack.push(3);
     * stack.printStack(); // returns [3]
     */
    printStack() {
        return this.items;
    }
}