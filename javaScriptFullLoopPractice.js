for (let i = 20; i <= 50; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

for (let i = 40; i <= 80; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 13 == 0) {
        sum += i;
    }
}
console.log(sum);

for (let i = 1; i <= 50; i += 4) {
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    if (i % 9 == 0 && i % 6 == 0) {
        console.log(i);
    }

}


let sum1 = 0
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        console.log(i);
        sum1 += i;
    }
}

console.log(sum1);

