let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // error
if (typeof userInput === "string") {
  userName = userInput;
}

//never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //while (true) {}
}

generateError("Oh Gosh what happened", 500);
