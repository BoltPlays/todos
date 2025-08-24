// What is the 'this' keyword?
// Answer: 'this' is the object that the function is a property of

console.log(this);

interface Test {
    name: string;
    foo: () => void;
}

const test: Test = {
    name: 'Archie',
    foo: function () {
        console.log('foo')
        console.log(this.name)
    }
}

test.foo()