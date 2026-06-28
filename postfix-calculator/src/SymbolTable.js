/** Class representing the symbol table, therefore, with the variables that will be stored to perform calculations using 
 * postfix. */
export class SymbolTable {
    constructor() {
        /**
         * Create an empty map to associate variable names (keys) with their values. A map is a native JavaScript data 
         * structure (since ES6) to store pair of key values. It's used to store the symbol table, where they are:
         * mutable, any data can be a key, and its order is always preseved.
         */
        this.table = new Map();
    }

    /**
     * Insert (or update) the value of a variable. Only single letters A-Z are valid keys.
     * @return {void}
     * @example
     * table.insert('A', 3); // table now holds A -> 3
     */
    insert(key, value) {
        if (!/^[A-Z]$/.test(key)) {
            throw new Error(`Invalid variable name: ${key}`);
        }
        this.table.set(key, value);
    }

    /**
     * Search for the value associated with a variable name.
     * @returns {T | undefined}
     * @example
     * table.insert('A', 3);
     * table.search('A'); // returns 3
     */
    search(key) {
        return this.table.get(key);
    }

    /**
     * Delete a variable from the symbol table.
     * @return {boolean}
     * @example
     * table.insert('A', 3);
     * table.delete('A'); // returns true, table no longer holds A
     */
    delete(key) {
        return this.table.delete(key);
    }

    /**
     * View table.
     * @return {map}
     * @example
     * table.insert('A', 3);
     * table.printTable(); // returns Map { 'A' => 3 }
     */
    printTable() {
        return this.table;
    }
}