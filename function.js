"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('result ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
printResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
