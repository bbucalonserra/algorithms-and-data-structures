/** Unit tests for the SymbolTable class, covering insert, search, delete and printTable. */
import { test } from 'node:test';
import assert from 'node:assert';
import { SymbolTable } from '../src/SymbolTable.js';

test('insert stores a value for a valid A-Z key', () => {
    const table = new SymbolTable();
    table.insert('A', 3);
    assert.strictEqual(table.search('A'), 3);
});

test('insert updates the value when the key already exists', () => {
    const table = new SymbolTable();
    table.insert('A', 3);
    table.insert('A', 99);
    assert.strictEqual(table.search('A'), 99);
});

test('insert throws for a key that is not a single letter A-Z', () => {
    const table = new SymbolTable();
    assert.throws(() => table.insert('1', 5), { message: 'Invalid variable name: 1' });
});

test('search returns undefined for a key that was never inserted', () => {
    const table = new SymbolTable();
    assert.strictEqual(table.search('Z'), undefined);
});

test('delete removes a key and returns true', () => {
    const table = new SymbolTable();
    table.insert('A', 3);
    assert.strictEqual(table.delete('A'), true);
    assert.strictEqual(table.search('A'), undefined);
});

test('delete returns false when the key does not exist', () => {
    const table = new SymbolTable();
    assert.strictEqual(table.delete('A'), false);
});

test('printTable returns the underlying map', () => {
    const table = new SymbolTable();
    table.insert('A', 3);
    assert.deepStrictEqual(table.printTable(), new Map([['A', 3]]));
});
