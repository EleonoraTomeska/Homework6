//Ex.1

let nums = [1, 2, 3, 4, 5, 6];
let sum = 0;
let average = 0;
let res = [];


for (let item of nums) {
    sum += item;
    average = sum / item;
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > average) {
        res.push(nums[i])
    }
}

console.log(res);