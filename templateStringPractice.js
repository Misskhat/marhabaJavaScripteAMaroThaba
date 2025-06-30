const num1 = 100;
const num2 = 80;
const subtraction = `The difference between ${num1} and ${num2} is ${num1 - num2}`;
// console.log(subtraction);

const employee = {
    name: 'Moinul Islam',
    age: 20,
    salary: 15000
}
// console.log(`City Express employee ${employee.name} age is ${employee.age} and his basic salary ${employee.salary}`);

const fruits = ['banana', 'bangi', 'lichi', 'mango', 'orange', 'watermilon'];
// console.log(`My favorite fruit is ${fruits[3]}`);

const a = 50;
const b = 10;
const result = `The division of ${a} and ${b} is ${a / b}`;
// console.log(result);

const person = {
    firstName: 'Amit',
    lastName: 'Kumar'
}

const fullName = `Full Name: ${person.firstName} ${person.lastName}`;
// console.log(fullName);

const animal = ["Cat", "Dog", "Elephant"];
const favoriteAnimal = `My favorit amimal are ${animal[0]}, ${animal[1]} `;
// console.log(favoriteAnimal);

function averageResult(arry) {
    let sum = 0;
    for (const num of arry) {
        sum += num;
    }
    const lengthOfArray = arry.length;
    const average = sum / lengthOfArray;
    return average
}

const student = {
    name: 'Mishkat',
    age: 29,
    result: [2.95, 3.80, 4.44]
}
const studentName = student.name;
const resultAverage = averageResult(student.result).toFixed(2);
// console.log(`Student name ${studentName} and his average marks ${resultAverage}`);
//another easy way
// console.log(`Student name ${student.name} and his average marks ${(student.result[0] + student.result[1] + student.result[2]) / 3}`);
