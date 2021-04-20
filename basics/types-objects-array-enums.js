"use strict";
// const person: {name: string; age: number} = {
//     name: 'Callahan',
//     age: 34
// };
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]// tuple only in ts
// } = {
//   name: "Callahan",
//   age: 34,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// person.role.push("admin"); //works if tuple or not
// person.role[1] = 10; //works if not tuple
// person.role = [ 0, 'admin']
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1]
// let favoriteActivities: string[];
// favoriteActivities = ["Sports", "Hiking "];
// console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby);
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); !!! Error !!
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Callahan",
    age: 34,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
console.log(person.name);
if (person.role === Role.ADMIN) {
    console.log(person.name + " is Administrator");
}
