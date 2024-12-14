//1. What will the output be for the following code?
function test(callback1, callback2) {
    callback1();
    console.log("2");
    callback1();
    console.log("8");
    callback2();
    console.log("9");
    callback2();
}
test(() => console.log("3"), () => console.log("6"));

//2. What will the following code output?
function calculate(callback) {
    let result = callback(5, 15, 25);
    console.log(result);
}
calculate(function (x, y, z) {
    return x * y - z;
});


//3. What is the value of result in this code?
function sumValues(callback) {
    let result = callback(2, 3, 4);
    console.log(result);
}
sumValues((a, b, c) => a + b * c);

//4. What is printed to the console?
function print(callback) {
    callback();
    console.log("Finished");
}
print(() => console.log("Started"));


//5. What is the output of this function?
function execute(callback1, callback2) {
    callback1();
    console.log("Middle");
    callback2();
}
execute(() => console.log("First"), () => console.log("Second"));

//6. What will console.log output in this example?
function operation(callback) {
    let result = callback(8, 4);
    console.log(result);
}
operation((a, b) => a / b);


//7. What does the following code print?
function runProcess(callback) {
    callback();
    console.log("Running...");
}
runProcess(() => console.log("Started"));
runProcess(() => console.log("In Progress"));


//8. What is the output for this function?
function calc(callback) {
    let result = callback(10, 5);
    console.log(result);
}
calc(function (x, y) {
    return x - y;
});


//9. What will console.log print?
function getResult(callback) {
    let result = callback(6, 2);
    console.log(result);
}
getResult((a, b) => a % b);


//10. What is the value of result in this code?
function compute(callback) {
    let result = callback(7, 9, 3);
    console.log(result);
}
compute((a, b, c) => (a * b) / c);


//11. What will the console output be?
function process(callback) {
    callback();
    console.log("Processed");
}
process(() => console.log("Initializing"));


//12. What is the value of result printed in this code?
function sum(callback) {
    let result = callback(12, 8, 4);
    console.log(result);
}
sum((x, y, z) => x + y - z);


//13. What will the following code output?
function multiply(callback) {
    let result = callback(3, 5);
    console.log(result);
}
multiply((x, y) => x * y);


//14. What is the value of result in this function?
function subtract(callback) {
    let result = callback(9, 4);
    console.log(result);
}
subtract((a, b) => a - b);


//15. What will the code print?
function execute(callback1, callback2) {
    callback1();
    console.log("Step");
    callback2();
}
execute(() => console.log("Start"), () => console.log("End"));


//16. What does the following code print?
function sumValues(callback) {
    let result = callback(2, 4);
    console.log(result);
}
sumValues((x, y) => x + y);


//17. What is the result printed?
function divide(callback) {
    let result = callback(20, 4);
    console.log(result);
}
divide((x, y) => x / y);


//18. What will be the console output for this code?
function showMessage(callback) {
    callback();
    console.log("Message shown");
}
showMessage(() => console.log("Alert!"));


//19. What does the following code output?
function calculateResult(callback) {
    let result = callback(8, 2, 1);
    console.log(result);
}
calculateResult((a, b, c) => a - b + c);


//20. What is the value printed for result?
function add(callback) {
    let result = callback(5, 3);
    console.log(result);
}
add((x, y) => x + y);
