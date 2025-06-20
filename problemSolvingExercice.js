function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
// const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

function inchToFeet2(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);

    const remainingInc = inch % 12;
    const finalHight = `${feetNumber} feet and ${remainingInc} inch`;
    return finalHight
}
const mishkatHeight = inchToFeet2(65);
console.log(mishkatHeight);