// Task1: Custom Array Filter
function customFilter(arr, callback) {
    let container = []
    for(let x in arr){
        if(callback(arr[x])){
          container.push(arr[x])
        }
    }
    return container
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]

// Task2: Countdown Timer
function countdown(start, callback) {
    let current = start
    function delay(){
        if(current >= 0){
            callback(current)
            current--;
            setTimeout(delay, 1000)
        }
    }
    delay()
 }

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

// Task 3: Simple Event Listener
function createButton(buttonText, callback) {
    document.getElementById(buttonText).addEventListener('click', callback)
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  


// Task 4: Task Runner
function runTasks(tasks) {
    let current = 0
    function delay(){
        if(current <tasks.length){
            tasks[current]()
            current++
            setTimeout(delay,1000)
        }
    }
    delay()
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  

// Task 5: Interactive Quiz Game (Extra Miles)
function askQuestion(question, choices, correctAnswer, callback) {

    let message = question + "\n";
    for(let x in choices){
        message += `${choices[x]} ,`
    }

    let userAnswer = prompt(message);

    if (userAnswer === correctAnswer) {
        callback(true);
    } else {
        callback(false);
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

// Example usage
askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
