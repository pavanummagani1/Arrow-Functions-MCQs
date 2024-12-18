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


//21. What will the output be for the following code?
function funcA(callback1, callback2) {
    callback1();
    console.log("A1");
    callback2();
    console.log("A2");
}

function funcB(callback) {
    console.log("B1");
    callback();
    console.log("B2");
}

funcA(() => funcB(() => console.log("Inside B")), () => console.log("End of A"));

//22. What will be printed to the console by the following code?
function outerFunc(callback) {
    console.log("Outer Start");
    callback();
    console.log("Outer End");
}

function innerFunc(callback) {
    console.log("Inner Start");
    callback();
    console.log("Inner End");
}

outerFunc(() => innerFunc(() => console.log("Innermost")));

//23. What is the result of the following code execution?
function processA(callback1, callback2) {
    callback1();
    callback2();
    console.log("ProcessA Done");
}

function processB(callback) {
    console.log("Start ProcessB");
    callback();
    console.log("End ProcessB");
}

processA(() => processB(() => console.log("Inside ProcessB")), () => console.log("End of ProcessA"));


//24. What will the following code print?
function action1(callback1, callback2) {
    callback1();
    console.log("Action 1");
    callback2();
}

function action2() {
    console.log("Action 2");
}

function action3(callback) {
    callback();
    console.log("Action 3");
}

action1(() => action3(() => console.log("Start")), action2);


//25. What will be the final result of this code?
function step1(callback) {
    console.log("Step 1");
    callback();
}

function step2(callback1, callback2) {
    callback1();
    console.log("Step 2");
    callback2();
}

step2(() => step1(() => console.log("Inner Step 1")), () => console.log("Inner Step 2"));

//26. What does this code print to the console?
function first(callback) {
    console.log("First");
    callback();
}

function second(callback) {
    console.log("Second");
    callback();
}

function third() {
    console.log("Third");
}

first(() => second(third));

//27. What will the following code output?
function alpha(callback1, callback2) {
    console.log("Alpha Start");
    callback1();
    console.log("Alpha Middle");
    callback2();
    console.log("Alpha End");
}

function beta(callback) {
    console.log("Beta Start");
    callback();
    console.log("Beta End");
}

function gamma() {
    console.log("Gamma");
}

alpha(() => beta(gamma), () => console.log("Delta"));

//28. What is the output for this code?
function run1(callback) {
    console.log("Run1 Start");
    callback();
    console.log("Run1 End");
}

function run2(callback1, callback2) {
    console.log("Run2 Start");
    callback1();
    console.log("Run2 Middle");
    callback2();
    console.log("Run2 End");
}

run2(() => run1(() => console.log("Run1 Inner")), () => console.log("Run2 Inner"));


//29. What does the following code print?
function firstAction(callback) {
    console.log("Action 1");
    callback();
}

function secondAction() {
    console.log("Action 2");
}

function thirdAction(callback) {
    console.log("Action 3");
    callback();
}

firstAction(() => thirdAction(secondAction));


//30. What is printed when the following code is executed?
function start(callback1, callback2) {
    callback1();
    console.log("Start");
    callback2();
}

function middle(callback) {
    console.log("Middle");
    callback();
}

function end() {
    console.log("End");
}

start(() => middle(() => console.log("Beginning")), end);