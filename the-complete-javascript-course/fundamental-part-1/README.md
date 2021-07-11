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
