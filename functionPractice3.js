function arrayOddSum(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num % 2 == 1) {
            sum += num;
        }
    }
    return sum
}

const friendNumber = [5, 15, 8, 7];
const friendNumberSum = arrayOddSum(friendNumber);
// console.log(friendNumberSum);

function smallerNumber(nums) {
    let firstNumber = nums[0];
    let secondNumber = nums[1]
    if (firstNumber < secondNumber) {
        return firstNumber
    } else {
        return secondNumber
    }
}
// console.log(smallerNumber([20, 10, 78]));

function myAgeTeller(n) {
    if (n < 18) {
        return 18;
    } else if (n > 45) {
        return 45
    }
    return n;
}
// console.log(myAgeTeller(15));


function fourDividedSum(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num % 4 == 0) {
            sum = sum + num;
        }
    }
    return sum;
}
// console.log(fourDividedSum([2, 4, 5, 7, 8, 32, 45]));

function doubleOrDivided(n) {
    if (n < 20) {
        return n * 2;
    } else {
        return n / 20;
    }
}
// console.log(doubleOrDivided(19));

function negetimeSum(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num < 0) {
            sum = sum + num;
        }
    }
    return sum;
}
// console.log(negetimeSum([-1, -2, -3, 1, 2, 3]));

function vagAndGun(nums) {
    let multiple = 1;
    for (const num of nums) {
        if (num % 3 == 0) {
            multiple = multiple * num;
        }
    }
    return multiple;
}
console.log(vagAndGun([2, 3, 6, 8, 9]));

