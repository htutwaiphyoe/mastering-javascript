const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76,
    johnWeight = 85;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI, johnBMI);
