"use strict";
// const person : {
//     name: string;
//     age: number;
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: 'Edward',
//     age: 50,
//     hobbies: ['Sports', 'cooking'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Edward',
    age: 50,
    hobbies: ['Sports', 'cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); //TS allows you use .toUpperCase() because it knows a string is inside the array data
    // console.log(hobby.map()); //TS doesn't allow you use map because map doesn't work with strings 
}
if (person.role === Role.ADMIN) {
    console.log('is author');
}
