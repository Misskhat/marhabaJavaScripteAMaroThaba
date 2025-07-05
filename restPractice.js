const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...others } = product;
// console.log(others);

const project = { id: 101, title: "Web App", budge: 3000, client: "Tech Corp" };
const { title, ...others2 } = project;
// console.log(others2);

const programmer = { name: "Sophia", language: "JavaScript", experience: 5, speciality: "Fronted", tools: "React" };
const { language, speciality, ...details } = programmer;
// console.log(details);

const numbers = [10, 20, 3, 30, 300, 3000];
const [first, second, ...othersNumber] = numbers;
// console.log(othersNumber);

function restOperation(a, b, ...rest) {
    return rest;
}
const numbers2 = restOperation(10, 20, 3, 30, 300, 3000);
// console.log(numbers2);

function restAverage(...rest) {
    let sum = 0;
    for (const num of rest) {
        sum += num;
    }
    const totalNumber = rest.length;
    const average = sum / totalNumber;
    return average
}

const number5 = restAverage(10, 20, 3, 30, 300, 3000);
console.log(number5);