const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function duplicateRemove(array) {
    const uniqueArray = [];
    for (const item of array) {
        if (uniqueArray.includes(item) === false) {
            uniqueArray.push(item)
        }
    }
    return uniqueArray
}

const uniqueNumbers = duplicateRemove(numbers);
console.log(uniqueNumbers);