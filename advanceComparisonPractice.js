/**
 * JavaScript Advanced Comparison Practice:
তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50 == "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে।
তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript" == 'JavaScript' আর "JavaScript" === 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে।
একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ। 
"apple" এবং "apple" লিখে তুলনা করলে, "apple" == "apple" এবং "apple" === "apple"-এর আউটপুট কী হবে।
একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর আউটপুট কী হবে।
variableX-এর মান 15 আর variableY-এর মান "20" দিলে variableX != variableY এবং variableX !== variableY-এর আউটপুট কী হবে।
variableA-এর মান hello আর variableB-এর মান "Hello"। এখন variableA == variableB এবং variableA === variableB চেক করার প্রোগ্রাম লিখ।

 */


console.log(50 == "50");
console.log(50 === "50");

console.log("JavaScript" == 'JavaScript');
// both value match that's why this comparison is true.
console.log("JavaScript" === 'JavaScript');
// both value and data type same that's why this comparison is true;

console.log(25 == "25");
// both value match that's why this comparison is true.
console.log(25 === "25");
// value match but data type no9t match that's why this comparison is false;

console.log("apple" == "apple");
console.log("apple" === "apple");

console.log("test" == "TEST");
console.log("test" === "TEST");

const variableX = 15;
const variableY = "20";
console.log(variableX != variableY);
console.log(variableX !== variableY);

const variableA = "hello";
const variableB = "Hello";
console.log(variableA == variableB);
console.log(variableA === variableB);

