/** Unit tests for the Interpreter class, covering isNumber, isVariable, resolve, operate, interpret and printTrace. */
import { test } from 'node:test';
import assert from 'node:assert';
import { Interpreter } from '../src/Interpreter.js';

test('isNumber returns true for a numeric token', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.isNumber('3'), true);
});

test('isNumber returns false for a variable token', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.isNumber('A'), false);
});

test('isVariable returns true for a single letter from A to Z', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.isVariable('A'), true);
});

test('isVariable returns false for a numeric token', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.isVariable('3'), false);
});

test('resolve returns the value stored for a variable name', () => {
    const interpreter = new Interpreter();
    interpreter.symbolTable.insert('A', 3);
    assert.strictEqual(interpreter.resolve('A'), 3);
});

test('resolve returns the same number when the value is not a variable name', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.resolve(7), 7);
});

test('operate adds two numbers', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.operate('+', 3, 4), 7);
});

test('operate subtracts two numbers', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.operate('-', 4, 3), 1);
});

test('operate multiplies two numbers', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.operate('*', 3, 4), 12);
});

test('operate divides two numbers', () => {
    const interpreter = new Interpreter();
    assert.strictEqual(interpreter.operate('/', 8, 4), 2);
});

test('operate throws for an unknown operator', () => {
    const interpreter = new Interpreter();
    assert.throws(() => interpreter.operate('%', 3, 4), { message: 'Invalid operator: %' });
});

test('interpret evaluates a simple postfix expression', () => {
    const interpreter = new Interpreter();
    assert.deepStrictEqual(interpreter.interpret(['3', '4', '5', '+', '*']), [27]);
});

test('interpret assigns a value to a variable, leaving the stack empty', () => {
    const interpreter = new Interpreter();
    assert.deepStrictEqual(interpreter.interpret(['A', '2', '=']), []);
});

test('interpret resolves variables stored from a previous call', () => {
    const interpreter = new Interpreter();
    interpreter.interpret(['A', '2', '=']);
    interpreter.interpret(['B', '3', '=']);
    assert.deepStrictEqual(interpreter.interpret(['A', 'B', '*']), [6]);
});

test('printTrace records one step per token, in the order they were read', () => {
    const interpreter = new Interpreter();
    interpreter.interpret(['3', '4', '+']);
    const steps = interpreter.printTrace();
    assert.strictEqual(steps.length, 3);
    assert.deepStrictEqual(steps[0], { token: '3', action: 'Read 3', stackAfter: [3] });
    assert.deepStrictEqual(steps[1], { token: '4', action: 'Read 4', stackAfter: [3, 4] });
    assert.deepStrictEqual(steps[2], { token: '+', action: 'Pop twice, evaluate, and push', stackAfter: [7] });
});

test('printTrace describes an assignment step with the variable name and value', () => {
    const interpreter = new Interpreter();
    interpreter.interpret(['A', '3', '=']);
    const steps = interpreter.printTrace();
    assert.strictEqual(steps[2].action, 'Pop twice and set the value of A to 3');
});

test('printTrace is overwritten on every new call to interpret', () => {
    const interpreter = new Interpreter();
    interpreter.interpret(['3', '4', '+']);
    interpreter.interpret(['5', '6', '7', '+', '*']);
    assert.strictEqual(interpreter.printTrace().length, 5);
});
