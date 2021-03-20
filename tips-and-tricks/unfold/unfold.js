const unfold = (fn, seed) => {
    const go = (fn, seed, acc) => {
        const res = fn(seed);
        return res ? go(fn, res[1], acc.concat([res[0]])) : acc;
    };

    return go(fn, seed, []);
};

const evensUpTo = (n) => unfold((current) => (current >= n ? false : [current, current + 2]), 0);

console.log(evensUpTo(10));
