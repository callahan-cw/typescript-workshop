type Combinable = number | string;
type ConversionDescriptor = 'as-number' | "as-text";

function combine(
//   input1: number | string,
  input1: Combinable,
//   input2: number | string,
  input2: Combinable,
  // resultConversion: string
//   resultConversion: "as-number" | "as-text" // literals types
  resultConversion: ConversionDescriptor // literals types
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
//   if (resultConversion == "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-text");
console.log(combinedStringAges);

const combinedNames = combine("Call for ", "DevOps", "as-text");
console.log(combinedNames);
