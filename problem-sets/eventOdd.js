

// find odd or even number without conditional statement

function checkOdd(num) {
    let isOdd = false;
    for (let i = 0; i < num % 2; i++) {
        isOdd = !isOdd;
    }
    return isOdd;
}
console.log(checkOdd(0));
