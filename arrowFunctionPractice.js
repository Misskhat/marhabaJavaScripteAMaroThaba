const firstIndexOfArray = (array) => array[0]
const arrayNew = [2, 3, 4, 5, 6, 7];
// console.log(firstIndexOfArray(arrayNew));

const threeNumberMultiple = (num1, num2, num3) => num1 * num2 * num3;
const a = 2;
const b = 4;
const c = 6;
// console.log(threeNumberMultiple(a, b, c));

const unknown = () => 'Unknown';

const myInfo = {
    name: 'mishkat',
    pocketBalance: 100
}
const balanceFiveDivided = (obj) => obj.pocketBalance / 5;
// console.log(balanceFiveDivided(myInfo));

const marks = [10, 12, 13, 14, 15];
const firstAndLastSum = (array) => {
    const firstNumber = array[0];
    const arrayLastIndex = array.length - 1;
    const lastNumber = array[arrayLastIndex];
    const result = firstNumber + lastNumber;
    return result;
}
// console.log(firstAndLastSum(marks));

const twoNumberSum = (num1 = 10, num2 = 5) => num1 + num2;
const number1 = 50;
const number2 = 100;
// console.log(twoNumberSum(number1, number2));
