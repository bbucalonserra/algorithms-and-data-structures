/** Class representing the symbol table, therefore, with the variables that will be stored to perform calculations using
 * postfix. */
export class SymbolTable {
    constructor() {
        /**
         * Create an Array with a fized size of 26 "slots", one for each letter from A to Z. This is called direct 
         * addressing, and is cheaper in memory than a Map for this specific, fixed and small namespace.
         */
        this.table = new Array(26);
    }

    /**
     * Check whether a key is a single letter from A to Z, the only valid variable names.
     * @return {boolean}
     * @example
     * table.isValidKey('A'); // returns true
     */
    isValidKey(key) {
        return /^[A-Z]$/.test(key);
    }

    /**
     * Calculate the position of a letter within the fixed-size table, e.g. 'A' is 0, 'B' is 1, and so on.
     * @return {number}
     * @example
     * table.indexFor('B'); // returns 1
     */
    indexFor(key) {
        return key.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    /**
     * Insert (or update) the value of a variable. Only single letters A-Z are valid keys.
     * @return {void}
     * @example
     * table.insert('A', 3); // table now holds A -> 3
     */
    insert(key, value) {
        if (!this.isValidKey(key)) {
            throw new Error(`Invalid variable name: ${key}`);
        }
        this.table[this.indexFor(key)] = value;
    }

    /**
     * Search for the value associated with a variable name.
     * @returns {T | undefined}
     * @example
     * table.insert('A', 3);
     * table.search('A'); // returns 3
     */
    search(key) {
        if (!this.isValidKey(key)) {
            return undefined;
        }
        return this.table[this.indexFor(key)];
    }

    /**
     * Delete a variable from the symbol table.
     * @return {boolean}
     * @example
     * table.insert('A', 3);
     * table.delete('A'); // returns true, table no longer holds A
     */
    delete(key) {
        if (!this.isValidKey(key) || this.table[this.indexFor(key)] === undefined) {
            return false;
        }
        this.table[this.indexFor(key)] = undefined;
        return true;
    }

    /**
     * View table.
     * @return {array}
     * @example
     * table.insert('A', 3);
     * table.printTable(); // returns [3, undefined, undefined, ...] (26 slots, A is the first one)
     */
    printTable() {
        return this.table;
    }
}
