function tax(incomeAmount) {
    if (incomeAmount <= 50000) {
        const tax = incomeAmount * 0.10;
        return incomeAmount - tax;
    } else if (incomeAmount > 50000 && incomeAmount <= 100000) {
        const tax = incomeAmount * 0.20;
        return incomeAmount - tax;
    } else if (incomeAmount > 100000 && incomeAmount <= 200000) {
        const tax = incomeAmount * 0.30;
        return incomeAmount - tax;
    } else if (incomeAmount > 200000) {
        const tax = incomeAmount * 0.40;
        return incomeAmount - tax;
    }
}
// const ic = tax(200001);
// console.log(parseFloat(ic).toFixed(2));

function packageDeliveryCost(wt) {
    if (wt < 10) {
        return 100;
    } else if (wt > 10 && wt < 20) {
        return 300;
    } else if (wt > 20 && wt < 50) {
        return 1000;
    } else if (wt > 50) {
        return (wt * 100)
    }
}
// const shipmentWeight = packageDeliveryCost(21);
// console.log(shipmentWeight);

function gradeChecker(marks) {
    if (marks >= 80) {
        return 'A';
    } else if (marks > 69) {
        return 'B';
    } else if (marks > 59) {
        return 'C';
    } else if (marks > 49) {
        return 'D';
    } else {
        return 'F'
    }
}
// const point = gradeChecker(80);
// console.log(point);

function arrayLeapYearCount(arr) {
    const leapYear = [];
    for (const ar of arr) {
        if ((ar % 4 === 0 && ar % 100 !== 0) || ar % 400 === 0) {
            leapYear.push(ar)
        }
    }
    return leapYear;
}
const year = arrayLeapYearCount([2100, 2400, 1900, 2052]);
console.log(year);
