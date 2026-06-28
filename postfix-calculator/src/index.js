import { createInterface } from 'node:readline';
import { Tokeniser } from './Tokeniser.js';
import { Interpreter } from './Interpreter.js';

// The SymbolTable that is part of the Interpreter has been created outside of a loop, so it will
// be maintained throughout all of the lines input into it.
const tokeniser = new Tokeniser();
const interpreter = new Interpreter();

// Set up the interface which will read from the terminal and write to the terminal.
const rl = createInterface({ input: process.stdin, output: process.stdout, prompt: '> ' });

// Briefly explain the expected input before any lines have been typed.
console.log('Write the calculus in postfix notation (e.g. 3 4 5 + *), tokens MUST BE SEPARATED BY SPACES.');
console.log('Type "trace" to see the step-by-step evaluation of the last line AFTER receiving the results from the postfix notation.');

// Show the prompt the first time before any lines have been input.
rl.prompt();

// Execute on every line entered when the user presses enter, passing in the whole line.
rl.on('line', (line) => {
    // Remove any leading or trailing spaces, so " 4 5 6 * * " is treated the same as "4 5 6 * *".
    const trimmedLine = line.trim();

    // Show the trace recorded by the previous call to interpret(), instead of evaluating it as postfix.
    if (trimmedLine === 'trace') {
        printTrace();
        rl.prompt();
        return;
    }

    // It will take the trimmed line and create an array of tokens (separated by spaces).
    const tokens = tokeniser.tokenise(trimmedLine);

    // For each of the tokens passed in, evaluate them against the existing symbol
    // table and the status of the stack and return the state of the stack.
    const stackContents = interpreter.interpret(tokens);

    // Print the state of the stack using the same format as the class PDF (i.e. [a b c]).
    console.log(formatStack(stackContents));

    // Display the prompt again and wait for the next line to be entered.
    rl.prompt();
});

// Cleanly terminate the process if the input stream closes (i.e. if the user presses ctrl+D).
rl.on('close', () => {
    process.exit(0);
});

// Reverse the array before joining, since the Stack stores the top of the stack at the end.
function formatStack(items) {
    return `[${[...items].reverse().join(' ')}]`;
}

// Print every step recorded for the last interpreted line.
function printTrace() {
    if (!interpreter.trace) {
        console.log('No line has been interpreted yet.');
        return;
    }

    for (const step of interpreter.printTrace()) {
        console.log(`${step.token} | ${step.action} | ${formatStack(step.stackAfter)}`);
    }
}
