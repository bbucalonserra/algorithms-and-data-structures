/** Class for the tokeniser, where it's responsability is to be the link between Stack and Symbol Table, transforming
 * the raw text into a list of small pieces that alone makes sence. Hence, two mixed responsabilities. A token could
 * be: a number (3, 27, etc.), a variable (A to Z), an operator (+ - * /), or a attribution (=). The token
 * does not need to distinguish each category, its responsabiity is only to tokenise.
 */
export class Tokeniser {
    constructor() {
        /**
         * The Tokeniser is stateless: it does not need to remember anything between calls, so there are
         * no properties to set up here. Each call to tokenise() works only with the line it receives.
         */
    }

    /**
     * Tokenise a string into an array, dividing it by spaces.
     * @return {Array}
     * @example
     * token.tokenise("Hello world"); // returns ["Hello", "world"]
     */
    tokenise(string) {
        let tokenisedString = string.split(' ');

        if (tokenisedString.length > 1) {
            return tokenisedString;
        } 
        else {
            throw new Error("Invalid string format.");
        }
    }
}