"use strict";
// basic syntax 
// let  variableName : type =  value
Object.defineProperty(exports, "__esModule", { value: true });
// Primitive DataTypes  -> Same as in Js 
// Primitve->
// number
var decimal1 = 42;
var hex = 0x2a; // Hexadecimal
var binary = 42; // Binary
var octal = 42; // Octal
// string
var name = "Aman";
var fName = "First Name is ".concat(name);
console.log(fName);
// Boolean 
var b = true;
console.log(typeof b);
// reference Types 
// 1: Array 
var arr1 = ["1,2,3,4,5,6"];
console.log(arr1);
var arr2 = [{ "1": "Name" }];
var arr3 = [1, 2, 3];
// let mixedArray: number[] = [1, "string"]; // Error: Type 'string' is not assignable to type 'number'.
// enum = An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
var variables;
(function (variables) {
    variables[variables["var1"] = 1] = "var1";
    variables[variables["var2"] = 2] = "var2";
    variables[variables["var3"] = 3] = "var3";
    variables[variables["var4"] = 4] = "var4";
})(variables || (variables = {}));
// console.log(variables.var1);
// console.log(variables.var2);
// console.log(variables.var3);
// console.log(variables.var4);
// Eg2
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
// logs 404
//   console.log(StatusCodes.NotFound);
// logs 200
//   console.log(StatusCodes.Success);
//   String Enum
var StringValues;
(function (StringValues) {
    StringValues["name"] = "Aman";
    StringValues["age"] = "22";
    StringValues["hobbies"] = "cricket";
    StringValues["none"] = "none";
})(StringValues || (StringValues = {}));
// console.log(StringValues[22]);   
// Note -> 
// Enums are objects in JavaScript, so they can be used both ways:but not in case of string enums 
// To get the name from the value.
// To get the value from the name.
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
var ans = 22;
ans = "number";
ans = true;
console.log(ans);
var myCar = {
    year: 123,
    type: "Racing",
    model: 2000
};
console.log(myCar);
var r1 = {
    height: 10,
    width: 100
};
var colorRec = {
    height: 10,
    width: 20,
    color: "red"
};
console.log(colorRec);
