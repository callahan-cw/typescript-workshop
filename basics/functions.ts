function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
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
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // both function works, if type is Function
// combineValues = 5; // error

console.log(combineValues(5, 5));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(12,23, (result) => {
    console.log(result);
})