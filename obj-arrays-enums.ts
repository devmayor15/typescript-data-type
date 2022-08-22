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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person = {
    name: 'Edward',
    age: 50,
    hobbies: ['Sports', 'cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase()); //TS allows you use .toUpperCase() because it knows a string is inside the array data
    // console.log(hobby.map()); //TS doesn't allow you use map because map doesn't work with strings 
}

if(person.role === Role.ADMIN){
    console.log('is author')
}