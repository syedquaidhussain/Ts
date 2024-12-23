//1.  Combining String Literals
type Color = "red"|"blue";
type Size = "small"|"large";

type ColorWithSize = `${Color}-${Size}`;




type Greetings = `Hello ${number}`;
let a :Greetings= `Hello ${12}`;


// 2. Adding Prefix or Suffix
type FileExtension = "jpg"|"png"|"gif";
type FileName = `myfile.${FileExtension}`;

const x : FileName = "myfile.gif";

// eg 3.
type API = `user`|`product`;
type Method = `get`|`post`;
type Endpoint = `${Method}/${API}`

type DiceNumber = 1|2|3|4|5|6;

const myvar : DiceNumber = 2;

// boolean literal
type alwaysTrue = true;
let truth :alwaysTrue = true;
let bool:boolean = true;