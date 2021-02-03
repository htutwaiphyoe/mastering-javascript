// swap two numbers without third variable

function swap(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    return [num1, num2];
}
let a = 1,
    b = 2;
console.log(a, b);
[a, b] = swap(a, b);
console.log(a, b);
