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