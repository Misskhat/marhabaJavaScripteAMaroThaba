/**
 Javascript let, const Practice:
তোর বর্তমান বয়স age নামে একটি ভেরিয়েবলে রাখ। কনসোলে প্রিন্ট কর। তারপর age ভেরিয়েবলে নতুন মান সেট কর এবং আবার কনসোলে প্রিন্ট কর।
তোর পকেটে এখন 500 টাকা আছে, pocketMoney নামে একটি ভেরিয়েবলে রাখ। পরে pocketMoney-এর মান 150 সেট কর এবং কনসোলে প্রিন্ট কর।
তুই 4 ঘণ্টা পড়াশোনা করার পরিকল্পনা করেছিস, studyTime নামে একটি ভেরিয়েবলে রাখ। পরে studyTime-এর মান আপডেট করে তুই আসলেই আজকে যত ঘণ্টা পড়াশোনা করছস, সেটা সেট কর। মান যদি শূন্য হয়, তাহলে 0-ই সেট কর এবং কনসোলে দেখ।
তোর মোট 3 জন বন্ধু আছে, friendsCount নামে একটি ভেরিয়েবলে এই সংখ্যা রাখ। পরে তোর 2 জন ফ্রেন্ড তোকে ছেড়ে চলে গেল। এখন friendsCount-এর মান আপডেট কর এবং কনসোলে সেটার আউটপুট দেখ
তুই একটা নতুন ফোন কিনছিলি 25000 টাকা দিয়ে। সেটা নিয়ে একটা ভেরিয়েবল ডিক্লেয়ার কর। আর এক মাস পর সেই ফোন বিক্রি করতে গিয়েই দেখস, দাম দিতে চায় 12000 মাত্র, কী আর করবি! phonePrice নামে একটি ভেরিয়েবলের মান প্রথমে 25000 দিবি। তারপর সেটাকে 12000 দিয়ে আপডেট কর এবং কনসোলে দেখা।
তোদের ক্লাসে 40টা চেয়ার আছে। কয়দিন পর 2টা চেয়ারের পা ভেঙে গেল। chairsCount নামে একটি ভেরিয়েবলে এই মান আপডেট কর। আরও কয়দিন পর পাশের রুমের সিনিয়র ভাইয়ারা এসে 6টা চেয়ার নিয়ে গেছে। এইবারও chairsCount-এর মান আপডেট কর এবং কনসোলে ফাইনাল মান আউটপুট করে দেখ।
তুই আজকে 3 ঘণ্টা খেলা করার পরিকল্পনা করেছিস, playTime নামে একটি ভেরিয়েবলে রাখ। পরে playTime-এর মান আপডেট করে আসলেই তুই কত ঘণ্টা খেলা করেছিস, সেটি সেট কর। যদি তুই না খেলিস, তাহলে playTime-এর মান 0 সেট কর এবং কনসোলে দেখ।
*/

let age = 20;
console.log(age);
age = 30;
console.log(age);

let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

let studyTime = 4;
studyTime = 2;

let friendsCount = 3;
friendsCount = 3 - 2;
console.log(friendsCount);

let phonePrice = 25000;
let resellValue = 12000;
phonePrice = phonePrice - resellValue
console.log(phonePrice)

let chairsCount = 40;
let chairBroken = 2;
let takeSeniorBrother = 4;
let totalChairLeft = chairBroken + takeSeniorBrother;
chairsCount = chairsCount - totalChairLeft;
console.log(chairsCount);


let playTime = 3;
playTime = 0;
console.log(playTime);



