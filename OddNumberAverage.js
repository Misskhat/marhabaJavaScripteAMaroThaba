//i'm doing this excercise for understandting the problem and how brake down one by one. 

function oddNumAvg(nums) {
    const odd = []
    for (const num of nums) {
        if (num % 2 == 1) {
            odd.push(num)
        }

    }
    if (odd.length === 0) {
        return 0;
    };
    let sum = 0;
    for (const num of odd) {
        sum = sum + num;
    }
    const avr = sum / odd.length;
    return avr;

}


const numberOfArr = oddNumAvg([12, 13, 65, 11, 24, 31]);
const numberOfArr1 = oddNumAvg([2, 4, 6, 8, 10]);
console.log(numberOfArr);
console.log(numberOfArr1);