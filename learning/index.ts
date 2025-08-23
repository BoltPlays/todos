// What is the 'this' keyword?
// Answer: 'this' is the object that the function is a property of

console.log(this);

const test = {
    name: 'Archie',
    foo: function () {
        console.log('foo')
        console.log(this.name)
    }
}

test.foo()