/*
JavaScript Parse Practice:
ধর তুই একটা মজার অঙ্ক করছিস। তুই ‘20’ লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?
তোর কাছে একটা ভগ্নাংশ আকারে মান আছে, যেমন '3.14159'। এই মানটা পূর্ণসংখ্যায় রূপান্তর করার জন্য একটা প্রোগ্রাম লিখ।
তুই 'premikBoy' নামের একটা স্ট্রিংকে সংখ্যা বানানোর চেষ্টা কর। দেখ কী আউটপুট দেয়।
তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ।
ধর, তুই '56.78' আর '12.34' স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ।
ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?
এখন '42.45689754'-কে দশমিকের পর 3 ঘর পর্যন্ত রাউন্ড কর।
*/

const webNumber = "20";
const addingNumber = 10;
const webNumberParse = parseInt(webNumber);
const totalNumber = webNumberParse + addingNumber;
console.log(totalNumber);

const pi = "3.14159";
const piNumber = parseInt(pi);
console.log(piNumber);

const tryNotANumber = "premikBoy";
console.log(parseInt(tryNotANumber));

const nwNum1 = 3.456;
const nwNum2 = 2.789;
const numTotal12 = nwNum1 + nwNum2;
console.log(numTotal12.toFixed(2));
console.log(parseFloat(numTotal12.toFixed(2)));


const number1 = "56.78";
const number1MakeNum = parseFloat(number1);
const number2 = "12.34"
const number2MakeNum = parseFloat(number2);
const total = number1MakeNum + number2MakeNum;
console.log(total);


const aa1 = "10.5678";
const aa1N = parseFloat(aa1);
const aa2 = "5.4321";
const aa2N = parseFloat(aa2);
const aaTotal = aa1N + aa2N;
console.log(parseFloat(aaTotal.toFixed(1)));

const bb1N = parseFloat("42.45689754");
console.log(parseFloat(bb1N.toFixed(3)));



