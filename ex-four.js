//Ex.4

let arr = [1, 2, 4, 6, 7, 11];
let arrs = [];

for (let i = 0; i < arr[i]; i++) {
    let prime = true;

    for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
            prime = false;
        }
    }
    if (prime) {
        arrs.push(arr[i]);
    }
}
console.log("Prime numbers " + arrs.join(', '))