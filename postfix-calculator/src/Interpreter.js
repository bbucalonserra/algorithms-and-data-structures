import { Stack } from './Stack.js';
import { SymbolTable } from './SymbolTable.js';
import { Queue } from './Queue.js';

/** Class that represents the interpreter, which is responsible for checking an array of postfix tokens, using a Stack
 * and a SymbolTable perform it. NOTE: it does not tokenise raw text itself, that responsability belongs to the Tokeniser
 * according to SoC (Separation of Concerns) concept.
 */
export class Interpreter {
    constructor() {
        /**
         * The SymbolTable must persist across several calls to interpret(), since a variable assigned in one
         * line must still be available in the next one.
         */
        this.symbolTable = new SymbolTable();
    }

    /**
     * Check whether a token represents a number.
     * @return {boolean}
     * @example
     * this.isNumber("3"); // returns true
     */
    isNumber(token) {
        return !isNaN(token);
    }

    /**
     * Check whether a token represents a variable name (a single letter from A to Z).
     * @return {boolean}
     * @example
     * this.isVariable("A"); // returns true
     */
    isVariable(token) {
        return /^[A-Z]$/.test(token);
    }

    /**
     * Resolve a value taken from the stack: if it is a variable name, look up its value in the symbol table,
     * otherwise it is already a number, so it is returned as is.
     * @return {number}
     * @example
     * this.symbolTable.insert('A', 3);
     * this.resolve('A'); // returns 3
     * this.resolve(7);   // returns 7
     */
    resolve(value) {
        if (typeof value === 'string' && this.isVariable(value)) {
            return this.symbolTable.search(value);
        }
        return value;
    }

    /**
     * Apply an arithmetic operator to two already resolved numbers.
     * @return {number}
     * @example
     * this.operate('+', 3, 4); // returns 7
     */
    operate(operator, a, b) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: throw new Error(`Invalid operator: ${operator}`);
        }
    }

    /**
     * Interpret an array of postfix tokens and return the resulting stack contents. 
     * A new Stack is created on every call, so each line is treated as an independent, complete expression. 
     * A trace of every step is also recorded in a Queue, in the same order as the tokens were read, matching the Tokens/Stack before/Action/Stack after tables shown in the coursework PDF. 
     * The trace can be read back with printTrace(), and it is overwritten on every new call to interpret().
     * @return {Array}
     * @example
     * interpreter.interpret(['3', '4', '5', '+', '*']); // returns [27]
     */
    interpret(tokens) {
        const stack = new Stack();
        const trace = new Queue(tokens.length);

        for (const token of tokens) {
            let action;

            if (this.isNumber(token)) {
                stack.push(Number(token));
                action = `Read ${token}`;
            } else if (this.isVariable(token)) {
                stack.push(token);
                action = `Read ${token}`;
            } else if (token === '=') {
                const value = stack.pop();
                const variableName = stack.pop();
                this.symbolTable.insert(variableName, value);
                action = `Pop twice and set the value of ${variableName} to ${value}`;
            } else {
                const b = this.resolve(stack.pop());
                const a = this.resolve(stack.pop());
                stack.push(this.operate(token, a, b));
                action = 'Pop twice, evaluate, and push';
            }

            trace.enqueue({ token, action, stackAfter: [...stack.printStack()] });
        }

        this.trace = trace;
        return stack.printStack();
    }

    /**
     * View the step-by-step trace recorded by the most recent call to interpret().
     * @return {Array}
     * @example
     * interpreter.interpret(['3', '4', '+']);
     * interpreter.printTrace(); // returns the steps for reading 3, reading 4, and evaluating +
     */
    printTrace() {
        return this.trace.printQueue();
    }
}
