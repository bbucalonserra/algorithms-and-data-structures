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
| printTable returns the underlying fixed-size array | `SymbolTable.printTable` exposes the internal array | `assert.deepStrictEqual` | SymbolTable |
| split is dividing the string according to spaces | `Tokeniser.tokenise` on divided strings | `assert.deepStrictEqual` | Tokeniser |
| isNumber returns true for a numeric token | `Interpreter.isNumber` on a numeric token | `assert.strictEqual` | Interpreter |
| isNumber returns false for a variable token | `Interpreter.isNumber` on a variable token | `assert.strictEqual` | Interpreter |
| isVariable returns true for a single letter from A to Z | `Interpreter.isVariable` on a variable token | `assert.strictEqual` | Interpreter |
| isVariable returns false for a numeric token | `Interpreter.isVariable` on a numeric token | `assert.strictEqual` | Interpreter |
| resolve returns the value stored for a variable name | `Interpreter.resolve` looking up a variable | `assert.strictEqual` | Interpreter |
| resolve returns the same number when the value is not a variable name | `Interpreter.resolve` on an already resolved number | `assert.strictEqual` | Interpreter |
| operate adds two numbers | `Interpreter.operate` with the `+` operator | `assert.strictEqual` | Interpreter |
| operate subtracts two numbers | `Interpreter.operate` with the `-` operator | `assert.strictEqual` | Interpreter |
| operate multiplies two numbers | `Interpreter.operate` with the `*` operator | `assert.strictEqual` | Interpreter |
| operate divides two numbers | `Interpreter.operate` with the `/` operator | `assert.strictEqual` | Interpreter |
| operate throws for an unknown operator | `Interpreter.operate` validation of invalid operators | `assert.throws` | Interpreter |
| interpret evaluates a simple postfix expression | `Interpreter.interpret` on a full arithmetic expression | `assert.deepStrictEqual` | Interpreter |
| interpret assigns a value to a variable, leaving the stack empty | `Interpreter.interpret` on an assignment expression | `assert.deepStrictEqual` | Interpreter |
| interpret resolves variables stored from a previous call | `Interpreter.interpret` reusing the SymbolTable across calls | `assert.deepStrictEqual` | Interpreter |
| enqueue adds an item to the back of the queue | `Queue.enqueue` places the new value at the back | `assert.strictEqual` | Queue |
| enqueue discards the oldest item once capacity is exceeded | `Queue.enqueue` bounded capacity behaviour | `assert.deepStrictEqual` | Queue |
| dequeue removes and returns the front item | `Queue.dequeue` returns and removes the front value | `assert.strictEqual` | Queue |
| dequeue on an empty queue returns undefined | `Queue.dequeue` behaviour on an empty queue | `assert.strictEqual` | Queue |
| peek returns the front item without removing it | `Queue.peek` reads the front without mutating the queue | `assert.strictEqual` | Queue |
| isEmpty returns true for a new queue | `Queue.isEmpty` on a freshly created queue | `assert.strictEqual` | Queue |
| isEmpty returns false after an enqueue | `Queue.isEmpty` after adding an item | `assert.strictEqual` | Queue |
| printQueue returns the underlying array of items | `Queue.printQueue` exposes the internal array | `assert.deepStrictEqual` | Queue |

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

3. Object `Array` from JavaScript is also used for the Symbol Table and the Queue, in place of a `Map`
   for the former. See the [Solution](#solution) section below for the reasoning behind each choice.

## Solution

### Stack: a native Array as the LIFO foundation
The coursework PDF states that "postfix expressions are conveniently evaluated using a stack", and
shows every worked example as a sequence of pushes and pops. The Stack class wraps a native JavaScript
`Array`, using `push`/`pop` at the same end to give LIFO (Last In First Out) behaviour for free, instead
of reimplementing array growth or indexing by hand. This is the most direct, literal implementation of
the mechanism the PDF describes.

### Symbol Table: Array instead of Map
The target hardware section of the coursework PDF states that the variable namespace is small and
fixed, consisting only of the names 'A'-'Z'. Because every possible key is known in advance and there
are only 26 of them, a general-purpose `Map` (which relies on hashing to support an unbounded number
of arbitrary keys) is more than what is actually needed here, and uses more memory than necessary for
such a constrained, small device. Instead, the Symbol Table uses **direct addressing**: a fixed-size
`Array` with exactly 26 slots, where the position of a variable is calculated directly from its letter
(`'A'.charCodeAt(0)` is the base, so `'A'` maps to index 0, `'B'` to index 1, and so on, up to `'Z'` at
index 25). This removes the need for hashing altogether and keeps the memory footprint fixed and
predictable, which matches the limited-memory constraint described for the target hardware.

### Resolving variables lazily, only when they are read
The PDF's own worked example for `A 3 =` reads the tokens as "Read A" (pushing the letter itself onto
the stack), then "Read 3", and only afterwards "pop twice and set the value of A to 3". This means a
variable token cannot be resolved to its value the moment it is seen, because at that point the
Interpreter does not yet know whether the variable is about to be **read** (used in a calculation, e.g.
`A B *`) or **assigned** (the target of a `=`). The Interpreter therefore pushes the variable name itself
onto the Stack, and only calls `SymbolTable.search()` to resolve it to a number inside `resolve()`, at
the exact point an operator needs two real numbers to compute with. This mirrors the PDF's own
token-by-token trace rather than resolving eagerly.

### A new Stack per line, a persistent Symbol Table
In the PDF's interactive session example, the stack is shown as `[]` after every assignment line and
only holds the final result after a calculation line, while a variable assigned on one line (`A 2 =`)
is still available several lines later (`A B *`). This shows that each line is evaluated as its own
independent, complete expression, while variables must outlive the line they were assigned on. The
Interpreter reflects this directly: `interpret()` creates a brand new `Stack` on every call, so leftover
values can never leak between lines, but the `SymbolTable` is created once in the constructor and reused
across every call, so assignments persist for the whole REPL session.

### Display order: reversing the stack before printing
The PDF notates the stack as `[a b c…]`, explicitly stating "the stack top is the leftmost token" (e.g.
`[9 3]`, with `9`, the most recent push, shown first). Because `Stack.push`/`pop` operate on the end of
the underlying `Array` for simplicity, the top of the stack is actually the **last** element internally,
which is the opposite order to the PDF's notation. `index.js` accounts for this by reversing a shallow
copy of the array (`[...stackContents].reverse()`) before printing, so what is shown on screen matches
the PDF's convention exactly, without mutating the Stack's real internal state.

### Queue: a step-by-step evaluation trace
The PDF documents its own algorithm using tables with the columns Tokens, Stack before, Action, and
Stack after, walking through `3 4 5 + *` and `A 3 =` step by step. To reproduce that same level of detail
for any expression the user types, `Interpreter.interpret()` builds a `Queue` of trace steps (one
`{ token, action, stackAfter }` entry per token processed), in the same chronological order the tokens
were read, which is exactly the FIFO (First In First Out) guarantee a Queue provides. The Queue's
capacity is bounded to the number of tokens in the line, so it never grows beyond what a single line
could possibly produce, keeping with the same limited-memory reasoning used for the Symbol Table. The
trace is exposed through `printTrace()`, and the REPL prints it on demand when the user types `trace`,
rather than always after each line, leaving the regular output identical to the PDF's worked examples.

### Trimming leading and trailing spaces
The PDF describes Postfix++ as evaluated "line-by-line, as entered, for example, on a mobile device",
where stray leading or trailing spaces (e.g. from an on-screen keyboard) are a realistic input scenario,
even though the PDF's own examples are always shown without them. `index.js` calls `line.trim()` before
tokenising, so a line such as `" 4 5 6 * * "` is treated identically to `"4 5 6 * *"`, matching the kind
of input the PDF anticipates without requiring the user to type it perfectly.

### Building with TDD, and the test suite
Every class was developed test-first: a test describing the expected behaviour was written, run to see
it fail, and only then was the corresponding method implemented to make it pass, repeated method by
method, class by class, in the dependency order Stack → Symbol Table → Tokeniser → Interpreter → Queue.
The worked examples the PDF itself provides, `3 4 5 + *` evaluating to `27`, and `A 2 =` / `B 3 =` /
`A B *` evaluating to `[6]` with the Symbol Table persisting the assignment across separate lines, are
encoded directly as assertions in `tests/Interpreter.test.js`. This means the test suite is not only a
safety net for future changes, but also a direct, automated check that the implementation matches the
exact behaviour the coursework specification describes, which is useful evidence to point to in the
written report on the design of the calculator.