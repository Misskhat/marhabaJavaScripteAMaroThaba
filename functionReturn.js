function isAvobe10(num) {
    if (num > 10) {
        return true
    }
    return false
}
console.log(isAvobe10(10));

function isdivided13(num) {
    if (num % 13 == 0) {
        return true
    }
    return false
}
console.log(isdivided13(19));

function hotelBill(price1, price2, price3) {
    return price1 + price2 + price3
}

const rice = 10;
const curry = 100;
const drinks = 15;
const totalBill = hotelBill(rice, curry, drinks);
console.log(totalBill);

function isEligableForVote(age) {
    if (age >= 18) {
        return 'You are eligable for vote'
    }
    return 'You are not eligable for vote'
}

const age = 21;
console.log(isEligableForVote(age));

function stringLength(st) {
    return st.length
}
console.log(stringLength("mishkat"));


function threeNumberAve(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

const numbers = threeNumberAve(12, 12, 12);
console.log(numbers);

function nagetiveTester(num) {
    if (num < 0) {
        const newNum = num * -1;
        return newNum;
    } else {
        return 'change the number and see the magi.'
    }
}

console.log(nagetiveTester(-1));