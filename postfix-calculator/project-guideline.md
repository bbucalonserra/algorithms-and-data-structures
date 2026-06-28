# Project Guideline


## Preparing the environment
1. First, let's run `npm init -y` in terminal to add the package.json with dependencies, scritps and all information from the project.
2.  Create directory of "src (source)

## Input
Input should be a text from user with tokens separated by space, each token could be:
* A number (3 4 27)
* An operator (+, /, *, -)
* A variable (letter from A to Z)
* Attribution operator (=)

For example: `3 4 5 + *`

## Output
After processing each line, the program must show the stack state, in the format `[a b c]` where items on the left are the top of the stack. Theresult of a calculus always ends in the top of the stack. Working as a REPL (read-eval-print-loop)

## Separation of Concerns
Divided into:
1. Interpreter
2. Stack
3. SymbolTable
4. Tokeniser

## Testing
Developed using  TDD. The tests are ran in the directory
`tests`. The types of possible asserts are:
* `assert.ok(value)`: checks that the value is truthy.
* `assert.strictEqual(actual, expected)`: compares primitives (numbers, strings, booleans) using `===`.
* `assert.notStrictEqual(actual, expected)`: confirms that two primitives are not equal, using `!==`.
* `assert.deepStrictEqual(actual, expected)`: compares structures (arrays, objects, Maps) recursively, field by field, also checking the types involved.
* `assert.notDeepStrictEqual(actual, expected)`: confirms that two structures are not equal.
* `assert.throws(fn, options)`: confirms that calling `fn` throws an error, optionally checking the error message.
* `assert.doesNotThrow(fn)`: confirms that calling `fn` does not throw an error.
* `assert.match(string, regex)`: confirms that a string matches a regular expression.
* `assert.rejects(promiseFn)`: confirms that an asynchronous function rejects, equivalent to `throws` for Promises.


The developed tests are:
| Test name | What it tests | Assert type used | Module |
|---|---|---|---|
| push adds an item to the top of the stack | `Stack.push` places the new value at the top | `assert.strictEqual` | Stack |
| pop removes and returns the top item | `Stack.pop` returns and removes the top value | `assert.strictEqual` | Stack |
| pop on an empty stack returns undefined | `Stack.pop` behaviour on an empty stack | `assert.strictEqual` | Stack |
| peek returns the top item without removing it | `Stack.peek` reads the top without mutating the stack | `assert.strictEqual` | Stack |
| isEmpty returns true for a new stack | `Stack.isEmpty` on a freshly created stack | `assert.strictEqual` | Stack |
| isEmpty returns false after a push | `Stack.isEmpty` after adding an item | `assert.strictEqual` | Stack |
| printStack returns the underlying array of items | `Stack.printStack` exposes the internal array | `assert.deepStrictEqual` | Stack |
| insert stores a value for a valid A-Z key | `SymbolTable.insert` with a valid key | `assert.strictEqual` | SymbolTable |
| insert updates the value when the key already exists | `SymbolTable.insert` overwriting an existing key | `assert.strictEqual` | SymbolTable |
| insert throws for a key that is not a single letter A-Z | `SymbolTable.insert` validation of invalid keys | `assert.throws` | SymbolTable |
| search returns undefined for a key that was never inserted | `SymbolTable.search` on a missing key | `assert.strictEqual` | SymbolTable |
| delete removes a key and returns true | `SymbolTable.delete` on an existing key | `assert.strictEqual` | SymbolTable |
| delete returns false when the key does not exist | `SymbolTable.delete` on a missing key | `assert.strictEqual` | SymbolTable |
| printTable returns the underlying map | `SymbolTable.printTable` exposes the internal map | `assert.deepStrictEqual` | SymbolTable |
| split is dividing the string according to spaces | `Tokeniser.tokenise` on divided strings | `assert.deepStrictEqual` | Tokeniser |

## Documentation
The coding style will be based on several guides.

1. For docstrings, classes and methods: [JSDoc](https://jsdoc.app/), specifically [HERE](https://jsdoc.app/howto-es2015-classes).
   - Comments using docstring `/** Comment */` for each class with description.
   - Comments using docstring `/** Comment */` for each method, applying description and return in the following format `* @return {<data type>}`.
   - Comments using docstring `/** Comment */` for each method parameter, applying description in the following format `* @param {<data type>} <name> - <description>`.
   - Classes using `extends` must declare the parent class with `* @extends <ParentClassName>`.

2. Object `Array` from JavaScript is used for the Stack. Native methods and properties from `Array` are:
   - `push(element)`: adds one or more elements to the end of the array and returns the new length.
   - `pop()`: removes the last element from the array and returns that element.
   - `shift()`: removes the first element from the array and returns that element.
   - `unshift(element)`: adds one or more elements to the beginning of the array and returns the new length.
   - `splice(start, deleteCount, item1, ...)`: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   - `length`: property, returns the number of elements in the array (reflects the highest integer index plus one).
   - `indexOf(element)`: returns the first index at which a given element can be found, or -1 if it is not present.
   - `includes(element)`: checks if the array contains a certain element, returns boolean.
   - `concat(array2)`: returns a new array combining the current array with other arrays and/or values.
   - `slice(start, end)`: returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included).
   - `forEach(callback)`: executes a provided function once for each array element.

3. Object `Map` from JavaScript is used for the Symbol Table. Native methods from `Map` are:
   - `set(key, value)`: define and update the key-value pair.
   - `get(key)`: return value associated with the key.
   - `has(key)`: check if key exists, returns boolean.
   - `delete(key)`: remove entry by key.
   - `clear()`: remove all entries.
   - `size`: property, number of entries.
   - `keys()`: returns iterator of all keys.
   - `values()`: returns iterator of all values.
   - `entries()`: returns iterator of `[key, value]` pairs.
   - `forEach(callback)`: executes callback for each entry, in insertion order.




