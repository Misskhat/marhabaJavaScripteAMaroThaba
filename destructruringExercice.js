const actor = {
    name: 'ananata',
    age: 30,
    phone: '0188232232',
    money: 123132313
}

// regular process
// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// const money = actor.money;

// destructruing process 
const { name, age, phone, money } = actor

console.log(name, age, phone, money);