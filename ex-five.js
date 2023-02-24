//Ex.5

let arr = [1, 0, -1, 2, 3, -10];

let sum = 0;

for (const item of arr) {
    if (item > 0) {
        sum += item;
    }
}
console.log(sum);