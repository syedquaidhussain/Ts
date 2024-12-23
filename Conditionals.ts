
// Syntax of conditional types 
// A extends B ? C : D




// // Basic eg 
// type Isstring<T> = T  extends string ? "Yes":"No";

// type Test1 = Isstring<number>

// const a : Test1 = "No"


// // Keyof in conditionals types 
// type key<T> =  T extends object ? keyof T : null;

// // type key2 = key<{name:"Aman",age:23}>;
// type key2 = key<[1,2,4]>;


// let naman : key2 ;
 
type op =  keyof  [1,2,3,4,5]
let nn : op= -1

console.log(nn);

type Is<T> = T extends object ? keyof T : string;

type opop = Is<[1,2,3]>; //------------------------------------------------------------------


// Distributive Conditional Types
// When a conditional type is applied to a union type, TypeScript distributes it across each member of the union:


// type ToString<T> = T extends number ? string : T;

// type Test = ToString<number | boolean>; // string | boolean



// eg 

type SomeType = string;
type ConditionalType = SomeType extends string ? string:number;

function outerFun<T>(value:T) {

// type A = T extends boolean ? "Type A": T extends string ?"Type B": T extends number? "Type C" :null;

const inner = (someArg: T extends boolean ? "Type A":"Type B") => {

    // const a:A=null

    // const nam :A = "Type C"
}
return inner ;
}

