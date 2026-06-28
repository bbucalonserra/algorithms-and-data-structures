// Import modules from program.
import { Stack } from './Stack.js';
import { SymbolTable } from './SymbolTable.js';
import { Tokeniser } from './Tokeniser.js';

// const stack = new Stack();
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(50);
// console.log(stack.pop());      // espera 5
// console.log(stack.peek());     // espera 4
// console.log(stack.isEmpty());  // espera false
// console.log(stack.printStack());


// const table = new SymbolTable();
// table.insert('A', 3);
// table.insert('B', 10);
// console.log(table.printTable());
// console.log(table.search('A'));   // espera 3
// console.log(table.search('B'));   // espera 10
// console.log(table.search('Z'));   // espera undefined

// table.insert('A', 99);             // update: A passa a valer 99
// console.log(table.search('A'));   // espera 99

// console.log(table.delete('A'));   // espera true
// console.log(table.search('A'));   // espera undefined

// try {
//     table.insert('1', 5);          // chave inválida (não é letra A-Z)
// } catch (err) {
//     console.log(err.message);      // espera "Invalid variable name: 1"
// }

const token = new Tokeniser();

var string = "Hello to all my friends"

var tokenisedString = token.tokenise(string)

console.log(tokenisedString);