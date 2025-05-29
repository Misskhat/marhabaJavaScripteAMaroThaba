const book = {
    name: 'javaScrip a maro thaba',
    writer: 'Jankar Mahabub',
    price: 650,
}
console.log(book);
console.log(Object.keys(book));
console.log(Object.values(book));

const article = {
    title: 'Learning JS',
    category: 'Programming'
}
if (article.hasOwnProperty('author')) {
    console.log('yes, author ache');
} else {
    console.log("no, author nai");
}

const laptop = {
    brand: 'Dell',
    model: 'Insprion',
    price: 45000
}
for (const key in laptop) {
    const value = laptop[key];
    console.log(key, value);
}

const phone = {
    brand: 'Samsung',
    model: "Galaxy S21",
    price: 85000
}

const phoneKey = Object.keys(phone)
for (const key of phoneKey) {
    const value = phone[key]
    console.log(key, value);
}

const bike = {
    brand: 'Hero',
    price: 120000,
    model: 'Splendor'
}
console.log(Object.values(bike));

const books = {
    book1: 'Harry Potter',
    book2: 'The Hobbit',
    book3: 'Game of Thrones'
}
for (const key in books) {
    const value = books[key];
    console.log(value);
}


const number = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sum = 0;
//option: 1
for (const key in number) {
    const value = number[key];
    sum += value;
}
console.log(sum);

//option: 2
const numberValue = Object.values(number)
for (const element of numberValue) {
    sum += element
}
console.log(sum);

const player = {
    name: 'Messi',
    team: 'Argentina',
    goals: 91
}
const playerValue = Object.values(player);
console.log(playerValue);

const building = {
    floors: 10,
    address: {
        street: 'Main Road',
        city: 'Dhaka'
    },
    type: 'Commercial'
}

for (const key in building) {
    const value = building[key]
    console.log(key, value);
    console.log(value);
}