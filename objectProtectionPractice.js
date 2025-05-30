const headphone = {
    brand: 'Sony',
    price: 300,
    color: 'red'
}
Object.freeze(headphone);
headphone.price = 400;
console.log(headphone);

const player = {
    name: 'Messi',
    goals: 800,
    club: 'Inter Miami'
}

Object.freeze(player);
player.goals = 900;
console.log(player);

const book = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    price: 500
}

Object.seal(book)
book.author = 'Mishkat';
console.log(book);

const gadget = {
    name: 'iPhone',
    price: 120000,
    color: 'Black'
}
delete gadget.price
console.log(gadget);

const animal = {
    name: 'Tiger',
    location: 'Sundarban'
}
Object.freeze(animal);
animal.location = 'Khulna';
console.log(animal);

const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large'
}
Object.seal(food)
food.resturentName = "Pizza bari";
food.price = 400;
console.log(food);

