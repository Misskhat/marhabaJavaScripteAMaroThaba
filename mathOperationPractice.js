// Javascript Math Operator Practice:
// ধর, তুই 100 টাকা আয় করেছিস। তার মধ্যে 40 টাকা খরচ করছিস। বাকি টাকা কত রইল, সেটা বের করার একটা প্রোগ্রাম লিখ।
// তোর কাছে 10টা পেন্সিল আছে। প্রতিবার তুই একসাথে 2টা পেন্সিল ব্যবহার করবি। কত বার ব্যবহার করতে পারবি?
// প্রোগ্রাম লিখে বের কর।তোর কাছে 60 টাকা আছে। তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে, সেটা বের করতে একটা প্রোগ্রাম লিখ।
// ধর, তুই দুইটা স্ট্রিং লিখলি "Hello" আর "World"। এই দুইটা স্ট্রিংকে একসাথে জোড়া দিয়ে কীভাবে "HelloWorld" বানানো যায়, সেটা দেখানোর জন্য একটা প্রোগ্রাম লিখ।
// তুই যদি 153 কেজি চাল আর 261 কেজি ডাল কিনলি, তাহলে তুই কয় কেজি জিনিস কিনেছিস? মোট কেজি বের করার একটা প্রোগ্রাম লিখ।
// তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
// তুই 8-কে 3 দিয়ে ভাগ দিলে ভাগফল কত আর ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।
// তুই 50-কে 9 দিয়ে ভাগ দিলে শুধু ভাগশেষ কত থাকে, সেটা বের করার একটা প্রোগ্রাম লিখ।
// তুই "Bangla" আর "desh" স্ট্রিং যোগ করে "Bangladesh" বানাতে চাস। কীভাবে করবি, সেটা দেখানোর একটা প্রোগ্রাম লিখ।
// ধর, একদিন ঘুম থেকে উঠে ক্ষিধার চোটে তুই ছোটখাটো একটা রাক্ষস হয়ে গেছস। তারপর থেকে প্রতিদিন 4 কেজি চালের ভাত খেয়ে ফেলস। এখন যদি তোকে 12 মন (480 কেজি) চাল দেয়া হয় থাকে, তাহলে এই চাল দিয়ে তোর কত দিন যাবে। আবার একমাস যদি 30 দিনে হয়, তাহলে এই 12 মন চাল দিয়ে তোর কত মাস যাবে। 

const earningAmount = 100;
const expenanceAmount = 40;

const restAmount = earningAmount - expenanceAmount;

console.log(restAmount);

const pencile = 10;
const useEveryTime = 2;

const timeOfUses = pencile / useEveryTime;

console.log(timeOfUses);

const everyTimeUseMoney = 15;

const timeOfUsesMoney = restAmount / everyTimeUseMoney;

console.log(timeOfUsesMoney);

const firstWord = "Hello";
const secondWord = "World";

const finalWord = firstWord+secondWord;

console.log(finalWord);


const chalKgs = 153;
const dalKgs = 261;

const totalKgs = chalKgs + dalKgs;

console.log(totalKgs);

const iHaveMoney = 500;
const everyTiemIUse = 75;

const howManyTimeIUse = iHaveMoney / everyTiemIUse;
const amarKacheThakbe = iHaveMoney % everyTiemIUse;

console.log(howManyTimeIUse, amarKacheThakbe);

console.log(8/3);
console.log(8%3);
console.log(50%9);

console.log("Bangla" + "desh");

const protidinVatKhai = 4;
const chalDeyaHolo = 480;

const totalDay = chalDeyaHolo / protidinVatKhai;

const month = 30;

const totalMash = totalDay / month;

console.log(totalDay, totalMash);




