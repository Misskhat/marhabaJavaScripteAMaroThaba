/**
 * JavaScript multiple condition Practice:

একটি প্রোগ্রাম লিখ। যেটা চেক করবে, বয়স 18-এর বেশি কি না এবং উচ্চতা 60 ইঞ্চির বেশি কি না। তাহলে সে গাড়ি ঠেলবে, না হয় সে গাড়িতে বসে থাকবে। 
একটি প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কি না। গণিত স্কোর 80-এর বেশি অথবা ইংরেজি স্কোর 85-এর বেশি হতে হবে। আর এইগুলার কোনোটাই সত্যি না হলে বলবি— তোকে বিয়ে দিয়ে দিব।
একজন স্টুডেন্টের GPA যদি 5 হয় এবং পরিবারের মাসিক আয় 10000-এর কম হয়, তাহলে সে স্কলারশিপ পাবে। না হয় তাকে বেতন দিয়ে পড়তে হবে। 
একজন চাকরিপ্রার্থী পরীক্ষা দিতে পারবে, যদি তার বয়স 30-এর কম হয় এবং কাজের অভিজ্ঞতা 2 বছরের বেশি হয়। আর না হয় চাকরির পরীক্ষা দিতে পারবে না। এমন একটা প্রোগ্রাম লিখ।
তোর ফ্রিজের ভেতর ডিমের সংখ্যা 12-এর বেশি অথবা মুরগি না থাকে, তাহলে তুই ডিমের কোরমা রান্না করবি। আর না হলে পাউরুটি আর কলা খাবি। এমন একটা কোড লিখ।
একজন মানুষের যদি শরীরের তাপমাত্রা 100 ডিগ্রির বেশি অথবা কাশি থাকে, তাহলে সে ডাক্তারের কাছে যাবে। নচেৎ সে কাঁথা মুড়ি দিয়ে শুয়ে থাকবে। এর জন্য একটা প্রোগ্রাম লিখ।
একজন শিক্ষার্থীকে পরীক্ষা দিতে দেয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি এবং হোমওয়ার্ক জমা দেয়া থাকে। নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগ্রাম লিখ।
যদি তোর বাসার বিদ্যুৎ চলে যায় এবং মোবাইলে চার্জ না থাকে, তাহলে তুই পড়তে বসবি। না হলে ভিডিও গেম খেলবি। এর জন্য কোড লিখ।
শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ।
 */

const age = 30;
const hight = 64.8;

if (age > 18 && hight > 60) {
    console.log("gari thalbe")
} else {
    console.log("garite bose thakbe")
}

const mathScore = 85;
const englishScore = 70;

if (mathScore > 80 || englishScore > 85) {
    console.log("vorti hote parbi")
} else {
    console.log("toke beya deya debo")
}

const gpaMarks = 5;
const familyIncome = 10000;

if (gpaMarks == 5 && familyIncome <= 10000) {
    console.log("sclorship pabe")
} else {
    console.log("beton deya porte hobe")
}

const jobPersonAge = 28;
const jobPersonExp = 1;

if (jobPersonAge <= 30 && jobPersonExp >= 2) {
    console.log("exam dete parbe")
} else {
    console.log("next time")
}

const egg = 20;
const haveMurgi = false;

if (egg > 12 || haveMurgi == false) {
    console.log("egg kurma khabo")
} else {
    console.log("ruti kola khabo")
}

const haveKasi = true;
const temperatureMan = 98;

if (temperatureMan > 100 || haveKasi == true) {
    console.log("go to doctor")
} else {
    console.log("katha muri deya gumabe")
}

const studendAttendence = 90;
const isHomeWorkDone = true;

if (studendAttendence > 80 && isHomeWorkDone == true) {
    console.log("exam dete parba")
} else {
    console.log("auto fail")
}

const haveElectricity = false;
const haveMobileCharge = true;

if (haveElectricity == false && haveMobileCharge == false) {
    console.log("now i am reading")
} else {
    console.log("ami game khalbo")
}

const shirtPrice = 1200;
const isCoupon = true;

if (shirtPrice > 1000 && isCoupon == true) {
    console.log("20% discount pabo")
} else {
    console.log("discount pabo na")
}