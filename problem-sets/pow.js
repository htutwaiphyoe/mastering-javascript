// implement power function without multiplication & division operators

function pow(base, power) {
    if (power === 0 || base === 1) {
        return 1;
    } else if (power === 1) {
        return base;
    } else {
        let n = base;
        let b = base;
        for (let j = 1; j < Math.abs(power); j++) {
            for (let i = 1; i < n; i++) {
                b += base;
            }
            base = b;
        }

        if (power > 1) return base;
        else return Math.exp(Math.log(1) - Math.log(base));
    }
}

console.log(pow(2, 10));
console.log(pow(2, -10));
