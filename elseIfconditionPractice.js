/**
 * JavaScript else-if Condition Practice:

তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে?
তুই একটি রেস্টুরেন্ট চালাচ্ছোস, যেখানে 12 বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং 60 বছরের ওপরের মানুষকে 50% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হয়।
যদি কারো ব্যাংক একাউন্টে ব্যালেন্স 1000 টাকার কম হয়, তাহলে বলবি, "ডিপোজিট কর।" 1000 থেকে 5000-এর মধ্যে হলে বলবি, "বিন্দাস লাইফ এনজয় কর।" আর 5000-এর বেশি হলে বলবি, "তুই ধনী, আমাকে বিয়া কর।"
একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস 50-এর কম হলে বলবি "Fail", 50 থেকে 80-এর মধ্যে হলে বলবি "Pass", আর 80-এর বেশি হলে বলবি "A+"।
কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"।
একটা প্রোগ্রাম লিখ। যা চেক করবে, তাপমাত্রা 0 ডিগ্রির কম হলে বলবে "Ice", 0 থেকে 20-এর মধ্যে হলে বলবে "Cool Cool", আর 20-এর বেশি হলে বলবে "Hot Hot"।
তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10-এর কম হলে বলবি "novice", 10 থেকে 50-এর মধ্যে হলে বলবি "Expert", আর 50-এর বেশি হলে বলবি "Pro Gamer"।
 */

const price = 4500;

if (price >= 6000) {
    const discountAmount = (price/100)*15;
    const newPrice = price - discountAmount;
    console.log(newPrice);
} else if (price >= 3000){
    const discountAmount = (price /100) * 5;
    const newPrice = price - discountAmount;
    console.log(newPrice);
}else{
    console.log(price);
}



const age = 30;

if (age > 60) {
    console.log("You got 50% discount!");
} else if(age < 12) {
    console.log("Your food free!!!!!")
}else{
    console.log("Please pay full.")
}


const bankAmount = 5000;

if (bankAmount < 1000) {
    console.log("Deposit koro");
} else if (bankAmount >= 1000 && bankAmount <= 5000) {
    console.log("Bindas life enjoy koro");
} else if (bankAmount > 5000){
    console.log("Tumi doni, beya koro");
}


const marks = 50;

if (marks > 80){
    console.log("A+");
}else if(marks >= 50){
    console.log("pass");
}else{
    console.log("fail")
}



const temperature = 5;

if (temperature > 20) {
    console.log("Hot!! Hot!!");
}else if (temperature >= 0) {
    console.log("cool!! cool!!");
}else{
    console.log("ice")
}


const playerLevel = 5;

if (playerLevel > 50) {
    console.log("Pro Gamer")
}else if (playerLevel >= 10) {
    console.log("Expart")
}else{
    console.log("Novice")
}
