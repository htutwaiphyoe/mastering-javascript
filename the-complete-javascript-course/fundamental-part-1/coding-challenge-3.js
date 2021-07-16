const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas) {
    console.log("Dolphins team wins!");
} else if (averageKoalas > averageDolphins) {
    console.log("Koalas team wins!");
} else {
    console.log("Draw!");
}

// BONUS 1
const minScore = 100;

const averageDolphins2 = (97 + 112 + 101) / 3;
const averageKoalas2 = (109 + 95 + 123) / 3;

console.log(averageDolphins2, averageKoalas2);
if (averageDolphins2 > averageKoalas2 && averageDolphins2 >= 100) {
    console.log("Dolphins team wins!");
} else if (averageKoalas2 > averageDolphins2 && averageKoalas2 >= 100) {
    console.log("Koalas team wins!");
} else {
    console.log("Draw!");
}

// BONUS 2
const averageDolphins3 = (97 + 112 + 101) / 3;
const averageKoalas3 = (109 + 95 + 106) / 3;

console.log(averageDolphins3, averageKoalas3);
if (averageDolphins3 > averageKoalas3 && averageDolphins3 >= 100) {
    console.log("Dolphins team wins!");
} else if (averageKoalas3 > averageDolphins3 && averageKoalas3 >= 100) {
    console.log("Koalas team wins!");
} else if (
    averageDolphins3 === averageKoalas3 &&
    averageDolphins3 >= 100 &&
    averageKoalas3 >= 100
) {
    console.log("Both team wins!");
} else {
    console.log("No team wins!");
}
