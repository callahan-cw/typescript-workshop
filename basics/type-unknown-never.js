"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // error
if (typeof userInput === "string") {
    userName = userInput;
}
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //while (true) {}
}
generateError("Oh Gosh what happened", 500);
