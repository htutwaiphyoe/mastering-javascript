const getName = (person) => person.name;

const uppercase = (string) => string.toUpperCase();

const get6Characters = (string) => string.substring(0, 6);

const reverse = (string) => string.split("").reverse().join("");

console.log(reverse(get6Characters(uppercase(getName({ name: "Buckethead" })))));

const pipe = (...fns) => (value) => fns.reduce((acc, curr) => curr(acc), value);

console.log(pipe(getName, uppercase, get6Characters, reverse)({ name: "Buckethead" }));

const compose = (...fns) => (value) => fns.reduceRight((acc, curr) => curr(acc), value);

console.log(compose(reverse, get6Characters, uppercase, getName)({ name: "Buckethead" }));
