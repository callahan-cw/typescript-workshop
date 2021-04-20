"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
// function printResult1(num: number): void {
//   console.log("Result: " + num);
//   return;
// }
// function printResult2(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }
printResult(add(4, 16));
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = printResult; // both function works, if type is Function
// combineValues = 5; // error
console.log(combineValues(5, 5));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(12, 23, function (result) {
    console.log(result);
});
