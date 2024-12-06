// Definition: Used to retrieve the type of a variable or expression at compile time.
// Use Case: Useful for reusing the type of existing variables.


const user = {
    id:1,
    name:"rahul"
}

type MyDatatype = typeof user

const customObj :MyDatatype = {
    id:100,
    name : "Anuj"
}

console.log(typeof user)

export{}