/** Unit tests for the Queue class, covering enqueue, dequeue, peek, isEmpty and printQueue. */
import { test } from 'node:test';
import assert from 'node:assert';
import { Queue } from '../src/Queue.js';

test('enqueue adds an item to the back of the queue', () => {
    const queue = new Queue();
    queue.enqueue('3 4 +');
    assert.strictEqual(queue.peek(), '3 4 +');
});

test('enqueue discards the oldest item once capacity is exceeded', () => {
    const queue = new Queue(2);
    queue.enqueue('A 2 =');
    queue.enqueue('B 3 =');
    queue.enqueue('A B *');
    assert.deepStrictEqual(queue.printQueue(), ['B 3 =', 'A B *']);
});

test('dequeue removes and returns the front item', () => {
    const queue = new Queue();
    queue.enqueue('3 4 +');
    queue.enqueue('A 2 =');
    assert.strictEqual(queue.dequeue(), '3 4 +');
    assert.strictEqual(queue.printQueue().length, 1);
});

test('dequeue on an empty queue returns undefined', () => {
    const queue = new Queue();
    assert.strictEqual(queue.dequeue(), undefined);
});

test('peek returns the front item without removing it', () => {
    const queue = new Queue();
    queue.enqueue('3 4 +');
    queue.enqueue('A 2 =');
    assert.strictEqual(queue.peek(), '3 4 +');
    assert.strictEqual(queue.printQueue().length, 2);
});

test('isEmpty returns true for a new queue', () => {
    const queue = new Queue();
    assert.strictEqual(queue.isEmpty(), true);
});

test('isEmpty returns false after an enqueue', () => {
    const queue = new Queue();
    queue.enqueue('3 4 +');
    assert.strictEqual(queue.isEmpty(), false);
});

test('printQueue returns the underlying array of items', () => {
    const queue = new Queue();
    queue.enqueue('3 4 +');
    queue.enqueue('A 2 =');
    assert.deepStrictEqual(queue.printQueue(), ['3 4 +', 'A 2 =']);
});
