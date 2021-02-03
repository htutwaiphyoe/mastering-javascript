// print 1 to N without loop

function print(num) {
    if (num === 1) {
        console.log(num);
        return;
    }
    print(num - 1);
    console.log(num);
}

print(9);
