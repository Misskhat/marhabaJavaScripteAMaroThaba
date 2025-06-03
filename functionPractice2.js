function isArrayEvenOrOdd(nums) {
    if (nums.length % 2 == 0) {
        return 'this array is even'
    }
    return 'this array is odd'
}
console.log(isArrayEvenOrOdd([12, 5, 7]));

function nameWord(str) {
    return str[0]
}
console.log(nameWord('mishkat'));

function tenNumberChecker(num) {
    if (num < 10) {
        return num * 10;
    }
    return num / 10;
}
console.log(tenNumberChecker(115));

function arrayFirstLastSum(nums) {
    const arrayFirstElement = nums[0];
    const arraySecondElement = nums[1];
    const sum = arrayFirstElement + arraySecondElement;
    return sum;
}

const numbersArray = arrayFirstLastSum([12, 125, 6, 789, 3]);
console.log(numbersArray);

function doubleOrTriple(n) {
    if (n > 0) {
        return n * 2;
    }
    return n * 3;
}

const num1 = doubleOrTriple(-5);
console.log(num1);

function nameLengthChecker(name1, name2) {
    if (name1.length > name2.length) {
        return true
    }
    return false
}
console.log(nameLengthChecker('mishkat', 'hossen'));


function numberWith100Checker(num1, num2) {
    const numberMultiple = num1 * num2;
    if (numberMultiple > 100) {
        return numberMultiple / 2;
    }
    return numberMultiple;
}
console.log(numberWith100Checker(5, 65));
