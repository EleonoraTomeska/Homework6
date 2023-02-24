//Ex.2

let strings = ["Jocka", "Test", "Test1", "Test", "Marko", "Marko"];

for (const item of strings) {
    counter = 0;
    for (let i = 0; i < strings.length; i++) {
        if (item === strings[i]) {
            counter++;
        }
    }
    if (counter > 1) {
        console.log("the first string that is duplicate in the array is " + item);
        break;
    }
}
if (counter <= 1) {
    console.log("There are no strings that are duplicate.")
}