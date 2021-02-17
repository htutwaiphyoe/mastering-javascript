// find maximun of three numbers without conditional statement & ternary operators

function max(num1, num2, num3) {
    const bool1 = num1 > num2 && num1 > num3;
    const bool2 = num2 > num1 && num2 > num3;
    const bool3 = num3 > num1 && num3 > num2;
    let nums = [num1, num2, num3];
    let bools = [bool1, bool2, bool3];
    let i = 0;
    while (!bools[i] && i < bools.length) {
        i++;
    }

    return nums[i++];
}

console.log(max(4, 1, 2));
