// const score: Array<number> = [];

// const names: Array<string> = [];

// function identityOne(val:boolean|number) : boolean|number {
//     return val;
// }

// function identityTwo(val:any): any{
//     return val ;
// }

// function identityThree<Type>(val:Type):Type{

// return val;

// }


// // or I can write like this. 
// function identityFour<T>(val:T):T{
//     console.log(val);
    
//     return val;
// }


// // Making our Own Datatype
// interface Bottle{
// brand:string,
// rate:number

// }

// identityFour<Bottle>({ brand:"Milton", rate:1000})

// // identityFour<string>("3")


// function getSearchProducts<T>(products:T[]):T{
//     // do some database operations
//     const myIndex = 3;
//     return products[myIndex]
// }


// // Generics in arrow function.
// const getMoreSearchProducts = <T,>(products:T[]):T=> {

//     // do some database operation
//     const myIndex = 4;
//     return products[myIndex]

// }



// interface Database{
//     connection : string,
//     username:string,
//     password:string
// }


// function anotherFunction<T,U extends Database> (value1:T,value2:U):object{

// return {
// value1,
// value2
// }

// } 

// anotherFunction(1,{connection:" ",username:" ",password:" "});

// interface Quiz{
//     name:string,
//     type:string
// }
// interface Course{
//     name:string,
//     author:string,
//     subject : string
// }

// generic Types 
type G<T> = {
    firstProp : T,
    secondProp:T
}


const obj : G<string> = {
    firstProp:"aman",
    secondProp:"zz"
}

// Generic classes in ts 
class Sellable<T>{
    public cart:T[] =[];

    addToCart(value:T){
        this.cart.push(value)
    }

    getCart(index:number):T {
   return  this.cart[index];
   
    }

}

const arr = new Sellable<string>()


arr.addToCart("soap");
arr.addToCart("clothes");
arr.addToCart("accessories");
console.log(arr.getCart(2))




// Generic Constraints(use of extends)
interface Lengthwise {

    length: number;


}

function logWithLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

// Works because strings and arrays have a length property
logWithLength("Hello"); // 5
logWithLength([1, 2, 3]); // 3

// Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// logWithLength(42);


export{}