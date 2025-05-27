// Includes: Includes is a js function which is find the searching number or string in a specific Array it is available or not;
// indexOf: indexOf is a js function which is find the searching number or string in a specific Array it is index number;

const fruits = ['apple', 'banana', 'mango', 'lichi'];

if (fruits.includes('mango')) {
    console.log('mango ache');
} else {
    console.log('mango nai, gace utho');
}

const nameArray = ['babul', 'alif', 'choton'];
console.log(nameArray.indexOf('babul'));


const friends = ['rimon', 'rifath', 'rakib'];
console.log(friends.indexOf('rifath'));

const cityName = ['Dhaka', 'Chittagong', 'Sylhet'];
cityName.push('rajshahi');
console.log(cityName);
console.log(cityName.includes('Rajshahi'));

const weatherArray = ['deghi', 'meg', 'bristy', 'borsha'];

if (weatherArray.includes('bristy')) {
    console.log('I need umberalla');
} else {
    console.log('No rain no pain');
}

const play = ['footbal', 'cricket', 'volibol']
console.log(play.includes('badminton'));