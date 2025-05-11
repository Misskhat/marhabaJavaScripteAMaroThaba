/**
 * JavaScript Condition Practice:

তোর আম্মু বলছে, 6টার আগে বাসায় ফিরলে তোকে নাস্তা খাওয়াবে। আর দেরি করলে ঝাড়ুর বাড়ি দিবে। এই শর্তের জন্য কোড কর।
একটা মোবাইল অ্যাপে যদি লগইন সফল হয়, তাহলে "Welcome!" দেখাবে। যদি ব্যর্থ হয়, "Get Lost!" দেখাবে। এই শর্তের জন্য প্রোগ্রাম লিখ। 
তুই যদি 5 কি. মি. দৌড়াস, তাহলে তোকে চকলেট খেতে দিবে। যদি না দৌড়াস, তাহলে তোর মোটা ভুঁড়ি হবে। এই শর্তের জন্য প্রোগ্রাম লিখ।
ধর, তোর বাবা বলেছে, যদি তুই পরীক্ষায় 80-এর বেশি পেয়ে পাস করিস, তাহলে তোকে বাইক কিনে দিবে। কিন্তু যদি কম হয়, তাহলে বাইক দিবে না। একটা প্রোগ্রাম লিখে দেখ, তুই বাইক পাবি কি না, যদি তোর নম্বর 85 হয়।
যদি মুভির শো রাত 9টার আগে হয়, তাহলে তুই মুভি দেখবি। যদি পরে হয়, তাহলে বাসায় গিয়ে নাকে তেল দিয়ে ঘুমাবি। এর জন্য প্রোগ্রাম লিখ।
তাপমাত্রা 30 ডিগ্রি বা তার বেশি হয়, তাহলে এয়ার কন্ডিশনার চালাবি। আর কম হলে কম্বল মুড়ি দিয়েই ঘুমাবি। এর জন্য কোড লিখ।
 */

const iAmReturnHome = 5;

if(iAmReturnHome < 6){
    console.log("Ammu nasta debe");
}else{
    console.log("Ammu jarur bari deba");
}

const login = true;

if (login == true) {
    console.log("Welcome!")
    
} else {
    console.log("Get Lost!")
}

const running = 2;

if (running == 5) {
    console.log("Choclate pabo")
} else {
    console.log("mota vuri hobe")
}

const myNumber = 85;

if (myNumber > 80) {
    console.log("bike pabo")
} else {
    console.log("bike pabo na")
}

const showTime = 10;

if (showTime < 9) {
    console.log("movie dakbo")
} else {
    console.log("nake tel deya gumabo")
}

const temperature = 40;

if (temperature > 30) {
    console.log("AC On")
} else {
    console.log("combole muri debo")
}