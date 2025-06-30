function sumOfNumbers(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3
}
// const numbers = sumOfNumbers(5);
// console.log(numbers);

function moneyDeposit(amount = 50) {
    return amount;
}

// const money = moneyDeposit(500);
// console.log(money);

function nameWithEarning(name = 'anonymous', earn = 0) {
    return "name is: " + name + " " + "his/her earning amount: " + earn;
}

// const name = nameWithEarning();
// console.log(name);

function productNameAndPrice(name = 'Unknown product', price = 1) {
    return "Product name is: " + name + " " + "Price: " + price;
}

function square(num = 1) {
    return num * num
}
// const number = square(5);
// console.log(number);

function favoriteBooks(name = ["JS book"]) {
    return name;
}
// const books = favoriteBooks();
// console.log(books);

function totalPrice(item = { price: 10, quantity: 1 }) {
    const totlAmount = item.price * item.quantity;
    return totlAmount
}

function incrementDouble(array = [5, 10, 15]) {
    const incrementArray = [];
    for (const num of array) {
        const numdouble = num * 2;
        incrementArray.push(numdouble)
    }
    return incrementArray;
}

function simpleInterest(object = { princple: 1000, rate: 5 }) {
    const princpleAmount = object.princple;
    const interastRate = object.rate / 100;
    const interest = princpleAmount * interastRate;
    return interest;
}

function salaryAfterTax(totlSalary = { salary: 50000, tax: 10 }) {
    const mainSalary = totlSalary.salary;
    const taxPercentage = totlSalary.tax / 100;
    const taxPay = mainSalary * taxPercentage;
    const netSalary = mainSalary - taxPay;
    return netSalary;
}
