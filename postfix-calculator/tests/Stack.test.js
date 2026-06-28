/** Unit tests for the Stack class, covering push, pop, peek, isEmpty and printStack. */
import { test } from 'node:test';
import assert from 'node:assert';
import { Stack } from '../src/Stack.js';

test('push adds an item to the top of the stack', () => {
    const stack = new Stack();
    stack.push(3);
    assert.strictEqual(stack.peek(), 3);
});

test('pop removes and returns the top item', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    assert.strictEqual(stack.pop(), 4);
    assert.strictEqual(stack.printStack().length, 1);
});

test('pop on an empty stack returns undefined', () => {
    const stack = new Stack();
    assert.strictEqual(stack.pop(), undefined);
});

test('peek returns the top item without removing it', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    assert.strictEqual(stack.peek(), 4);
    assert.strictEqual(stack.printStack().length, 2);
});

test('isEmpty returns true for a new stack', () => {
    const stack = new Stack();
    assert.strictEqual(stack.isEmpty(), true);
});

test('isEmpty returns false after a push', () => {
    const stack = new Stack();
    stack.push(3);
    assert.strictEqual(stack.isEmpty(), false);
});

test('printStack returns the underlying array of items', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    assert.deepStrictEqual(stack.printStack(), [3, 4]);
});
