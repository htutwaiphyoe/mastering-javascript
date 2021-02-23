// implement ternary operator without conditional expression

function ternary(bool, val1, val2) {
    return (+bool && (+bool || val1)) || val2;
}

console.log(ternary(1 !== 1, 1, 2));
