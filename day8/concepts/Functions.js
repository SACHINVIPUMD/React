/*
 * In JS functions are first class citizens.
 * Which means that functions are treated in the same way as strings, numbers & arrays.
 * Meaning
 *  -> Functions can be stored in a variable.
 *  -> Functions can be passed as arguments to another functions. // Callback Function
 *  -> Functions can be returned from a function. // Higher order function.
 */

const helloWorld = function greet() {
  return "Hello Student";
};

console.log(helloWorld());
