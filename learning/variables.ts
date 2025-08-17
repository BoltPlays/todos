// Primitive Values - https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// string
// number - 1.0 23423432432432432432 432
// boolean
// undefined
// null

const banana = 'bananana';
const banana2 = 'bananana';

if (banana === banana2) {
    // console.log('YES')
}

// Objects

let test = {
    name: 'test',
    age: 10,
};

const user = {
    name: 'test',
    age: 30,
};

const checkAgeStatus = (age: number) => (age > 15 ? 'active' : 'inactive')

const addUserStatus = (user: any) => ({
    ...user,
    status: checkAgeStatus(user.age),
});

const userWithStatus = addUserStatus(user);
const testWithStatus = addUserStatus(test);

// const testJson = JSON.stringify(test)

// const testParse = JSON.parse(testJson)

// if (testJson === JSON.stringify(test2)) {
//     console.log('yes2')
// }

// if (test === test) {
//     console.log('EQUAL!!!')
// }

// created with a value of "bananana", this value is assigned to a place in the memory

// created an object with a value of { name: 'test', age: 30, }, this value is assigned to it's own place in memory
