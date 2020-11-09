const a = () => {
    console.log("ok")
}

a();

// Examples of Automatic Semicolon Insertion

// two statements with separate line
let x = 1
let y = 2

// Interpret to
let x = 1;
let y = 2;

let i = 1; let j = 2 // add semicolon manually 

// Continuation of statement (1)
let a
a
=
3
console.log(a) 

// Interpret to
let a;a = 3;console.log(a);


// Continuation of statement (2)
let y = x + f
(a+b).toString()
// Interpret to
let y = x + f(a + b).toString();

let x = 0 // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate

// Restrcted Productions

// Written
return 
{
    a: 1
}

// Interpreted
return; {a: 1}; // return undefined

// Excepted
return {a : 1};

// Written
x
++
y

// Intrepreted 

x; ++y;

// Excepted
x++; y;