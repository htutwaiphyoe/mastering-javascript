# Fundamental Part I

## A brief introduction to JavaScript

### What is JavaScript?

JavaScript is a high-level, object-oriented, multi-paradigm programming language

Programming => writing code that will instruct computer to do things
High-level => give abstractions and don't have to worry about complex things like memory management
=> easier to write and learn
Object-oriented => based on objects for storing data
Multi-paradigm => can use different styles of programming
=> imperitive and declarative
=> structuring code

### Role of JavaScript

Three core technologies of web

HTML => responsible for content of the page
=> button, image, etc
=> nouns

CSS => responsible for presentation of the content
=> styling, layouting, etc
=> adjective

JavaScript => responsible for dynamic and interactive effects of the page
=> manipulating content or style and loading data from remote server
=> verbs

### Things you can do with JavaScript

Front-end => React, Vue, Angular
=> web applications in a browser
Back-end => Nodejs
=> web applications on a server
Mobile => React Native, Ionic
=> native mobile application

Desktop => Electron
=> native desktop application

### JavaScript releases

ES5 => ES6/ES2015 => ES7/ES2016 => ES8/ES2017 => ES9/ES2018 => ES10/ES2019 => ES11/ES2020

ES6/ES2015 => a huge update
ES => ECMAScript

After ES6/ES2015, there is now a yearly new release with new features. Starting from ES6/ES2015 is called **modern javascript**

## Linking a JavaScript File in HTML file

add script tag at the end of the body tag and link with src by passing the path of JavaScript file

## Values & Variables

value is a piece of data, the most fundamental unit of information.

variable is like a box with a label which stores a value. if we want to get that value, we use that label.
in programming, same value can be used in different area. if we use literal value, if we update it,
we have to change manully all the areas. With variable, we only need to change the value in variable declaration.

let variableName = value;

### naming rules

variable name must be start with letters, underscore and dollar sign.
variable name must not include special characters except underscore and dollar sign.
variable name must not be same as reserved word.

### naming convention

variable name should be written in camelCase.
variable name should be descriptve.
normal variable name should not start with Upper case letter.
constant variable name should be in all upper case.

## Data types

A value can be primitive or object.

7 primitive

1. Number => floating point numbers, used for decimals and integers, 23 means 23.0
2. String => Sequence of characters, used for text, wrap with quotes
3. Boolean => true or false, used for decisions
4. Undefined => value from a variable which value is not yet defined
5. Null => empty value 
6. Symbol => value that is unique and cannot be changed. introduced in ES2015
7. BigInt => larger integers that are too large to represent with Number type, introduced in ES2020

JavaScript is dynamic type language. We do not need to manually define data type of the value stored in a variable.
Data types are determined automatically. Value has type, not variable. We can reassign value with different data type to the same variable. to reassign a variable, let or const keyword is not needed.

Comments 
JavaScript ignores comments.
single-line comment => //
multi-line comment => /* */

typeof => return a string of type name of a value

typeof undefined is undefined which means both value and type are undefined.
typeof null is object. It might be bug of language.

## let, const and var

var => old version
let, const => introduced in ES2015

let => variable which value can be changed later, mutable variable
const => variable which value can not be changed, immutable variable, value must be initialized
var => almost the same as let, value can be changed

best practice: use const as much as you can, use let only the value of variable is supposed to change, to get as little as variable mutation, avoid var as much as you can, avoid declaration without keywords

## Basic operators

operators => manipulate values to transform values or combine values

arithematic operators => do mathematical operations, +, -, /, *, **, %
 
console.log() can output multiple values at the same time. console.log(value1, value2,...)

\+ operator can also concatenate strings.

assignment operator => =, +=, -=, /=, *=, **=, %=, let x = 1 means 1 is assign to x, not equal to.

increment operator => ++, x++, ++x, increase 1 to the value

decrement operator => --, x--, --x, decrease 1 from the value

comparison operators => produces boolean values, >, <, <=, >=

console can access variables in current running browser tab.
