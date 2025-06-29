function evenNumberAvr(nums) {
    const even = []
    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num)
        }
    }
    if (even.length === 0) {
        return 0;
    }
    let sum = 0
    for (const num of even) {
        sum = sum + num;
    }
    const avg = sum / even.length;
    return avg;
}

// const numbers = evenNumberAvr([2, 3, 4, 5, 6])
// console.log(numbers);

function oddDouble(numbers) {
    const oddNumbers = []
    for (const num of numbers) {
        if (num % 2 == 1) {
            const double = num * 2;
            oddNumbers.push(double)
        }
    }
    return oddNumbers;
}

// const numbers1 = oddDouble([2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(numbers1);

function oddFinding(numbers) {
    const oddArray = []
    for (const num of numbers) {
        if (num % 2 == 1) {
            oddArray.push(num)
        }
    }
    if (oddArray.length !== 0) {
        return ('Odd Numbers Found');
    } else {
        return ('No Odd Numbers Found');
    }
}

// const numbers2 = oddFinding([2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(numbers2);

function oddAverage(numbers) {
    const oddArray1 = [];
    for (const num of numbers) {
        if (num % 2 === 1) {
            oddArray1.push(num);
        }
    }
    if (oddArray1.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const odd of oddArray1) {
        sum += odd;
    }
    const totalOddNumbers = oddArray1.length;
    const averageOfOdd = sum / totalOddNumbers;
    const averageWithDecimale = averageOfOdd.toFixed(2)
    return averageWithDecimale;
}

// const numbers2 = oddAverage([2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(numbers2);

function oddLessOne(numbers) {
    const oddLessOne = []
    for (const num of numbers) {
        if (num % 2 == 1) {
            const lessOne = num - 1;
            oddLessOne.push(lessOne)
        }
    }
    return oddLessOne
}

const numbers3 = oddLessOne([2, 3, 4, 5, 6, 7, 8, 9]);
console.log(numbers3);