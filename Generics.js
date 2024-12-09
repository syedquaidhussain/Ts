"use strict";
// const score: Array<number> = [];
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    firstProp: "aman",
    secondProp: "zz"
};
// Generic classes in ts 
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (value) {
        this.cart.push(value);
    };
    Sellable.prototype.getCart = function (index) {
        return this.cart[index];
    };
    return Sellable;
}());
var arr = new Sellable();
arr.addToCart("soap");
arr.addToCart("clothes");
arr.addToCart("accessories");
console.log(arr.getCart(2));
