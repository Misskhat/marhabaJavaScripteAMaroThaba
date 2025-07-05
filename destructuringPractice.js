const product = { name: 'Laptop', price: 50000, brand: 'Dell' };
const { brand } = product;
// console.log(brand);

const item = { name: "Mobile", price: 20000, phone: "Samsung" };
const { phone1, price } = item;
// console.log(phone1, price);

const colors = ["red", "blue", "green", "yello"];
const [first, second1] = colors;
// console.log(first, second1);

const numbers = [100, 200, 300];
const [, second] = numbers;
// console.log(second);

const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
// console.log(two, eight);

function multiply(a, b) {
    return [a * 3, b * 3];
}

const [num1, num2] = multiply(3, 5);
// console.log(num1, num2);

const person = { personName: "Rahim", city: "Dhaka" };
const { personName, city, phone = "N/A" } = person
// console.log(name, city, phone);


const teacher = { name: "Maria", profession: "Teacher" };
const { name, profession: job } = teacher
console.log(name, job);