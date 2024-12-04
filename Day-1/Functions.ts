// function getTime(): number {
//     return new Date().getTime();
//   }


// function printHello(): void {
//     console.log('Hello!');
//   }


// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

// Example
// function multiply(a: number, b: number) {
//   return a * b;
// }




// // the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);



//   }


// Default Parameters
// For parameters with default values, the default value goes after the type annotation:

// Example
// function pow(value: number, exponent: number = 10) { 
//   return value ** exponent;
// }


// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

// Example
// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//   return dividend / divisor;
// }


// Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.

// Example
// type Negate = (value: number) => number;

// // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
// const negateFunction: Negate = (value) => value * -1;
