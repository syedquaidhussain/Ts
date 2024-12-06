"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adminUser = {
    name: "Aman",
    role: ["hello", "Bye"]
};
console.log(typeof adminUser);
var user = {
    name: function (name) {
        return 21;
    },
    address: function (add) {
        return Number(add);
    }
};
user.name("smksm");
console.log(user.address("add"));
