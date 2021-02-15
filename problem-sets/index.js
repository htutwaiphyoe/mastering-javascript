// adding two numbers without additional operator

function sum(num1, num2) {
    return -(-num1 - num2);
}
console.log(sum(1, 2));

// find odd or even number without conditional statement

function checkOdd(num) {
    let isOdd = false;
    for (let i = 0; i < num % 2; i++) {
        isOdd = !isOdd;
    }
    return isOdd;
}
console.log(checkOdd(2));
