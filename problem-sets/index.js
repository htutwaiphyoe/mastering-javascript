function sum(arr1, arr2) {
    let num1 = +arr1.reverse().join("");
    let num2 = +arr2.reverse().join("");
    return `${num1 + num2}`
        .split("")
        .map((n) => +n)
        .reverse();
}

console.log(sum([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
