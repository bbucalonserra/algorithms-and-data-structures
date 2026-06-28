/** Unit tests for the Tokeniser class, covering tokenise. */
import { test } from 'node:test';
import assert from 'node:assert';
import { Tokeniser } from '../src/Tokeniser.js';

test('split is dividing the string according to spaces', () => {
    const token = new Tokeniser();
    const testedMessage = "Hello to all my friends"
    assert.deepStrictEqual(token.tokenise(testedMessage), ["Hello", "to", "all", "my", "friends"]);
});