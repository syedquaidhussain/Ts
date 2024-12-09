// class User {
//     private _name: string
//     constructor(name:string){
//         this._name = name ;
//     }
//     getName():string{
//      return this._name;
//     }
// }
// const user1 = new User("Aman")
// console.log(user1.getName());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user1 = new User("Aman");
console.log(user1.getName());
