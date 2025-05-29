
const player = {
    name: 'tamim',
    age: 32,
    sports: 'cricket',
    team: 'bangladesh'
}
console.log(player.team);

const laptop = {
    brand: 'lenovo',
    price: 55000,
    hardDisc: '500gb',
    ram: '16gb',
    screenSize: 15.6
}
console.log(laptop.screenSize);

const fabPlace = {
    name: "cox's bazar",
    distance: '400km',
    propularity: 'high'
}
console.log(fabPlace['propularity']);

const phone = {
    brand: 'Nokia',
    color: 'black',
    price: 5000
}
console.log(phone['price']);

const library = {
    name: 'Pablic Library',
    localtion: 'Dhaka',
    book: 5000
}
console.log(library.localtion);

const movie = {
    title: 'Inception',
    direction: 'Nolan',
    rating: 9
}
console.log(movie['rating']);

const college = {
    name: 'ndc',
    established: 1949,
    group: ['Science', 'Arts', 'Commerce'],
}
console.log(college.group[1]);

const family = {
    father: {
        name: 'abbu',
        age: 60,
        profession: 'self employed'
    },
    mother: {
        name: 'ammu',
        age: 48,
        profession: 'housewife'
    }
}

const fatherAge = family.father.age;
const motherAge = family.mother.age;
const sumAge = fatherAge + motherAge;
console.log(sumAge);