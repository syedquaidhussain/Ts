// keyof is a keyword in TypeScript which is used to extract the key type from an object type.
var customObj = {
    name: 12,
    age: 19,
    rollNo: 33
};
function dynamic(customObj, key) {
    var _a;
    console.log(customObj);
    console.log(key);
    return _a = {},
        _a[key] = 1,
        _a;
}
console.log(dynamic(customObj, 1));
