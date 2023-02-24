//Ex.3

let numbers = [1, 2, 3, 4, 5,];
let sum = 3;
let pair = false;

for (const item of numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (item + numbers[i] === sum) {
            console.log(numbers[i] + " + " + item + " = " + sum);
            pair = true;
        } break;
    }
    if (pair) {
        break;
    }
}
if (!pair) {
    console.log("There are no pairs that are equal to the sum");
}