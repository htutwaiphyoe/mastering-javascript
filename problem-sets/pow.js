// implement power function without multiplication & division operators

function pow(base, power) {
    let b = Math.abs(base);
    if (power === 0 || b === 1) {
        return 1;
    } else if (power === 1) {
        return b;
    } else if (b === 0 && power < 0) {
        return Infinity;
    } else {
        let n = b;
        let r = b;
        for (let j = 1; j < Math.abs(power); j++) {
            for (let i = 1; i < n; i++) {
                r += b;
            }
            b = r;
        }

        if (power > 1) return base < 0 && Math.abs(power) % 2 === 1 ? -b : b;
        else
            return base < 0 && Math.abs(power) % 2 === 1
                ? -Math.exp(Math.log(1) - Math.log(b))
                : Math.exp(Math.log(1) - Math.log(b));
    }
}

console.log(pow(-2, -3));
