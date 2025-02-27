//Exercise 1: Writing Your First Callback Function
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(6, 2, subtract)); // Output: 4
console.log(calculate(10, 2, divide)); // Output: 5

// Exercise 2: Using Callbacks with setTimeout
function delayedMessage(message, delay, callback, callback2) {
    callback2()
    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function(msg) {
    console.log(msg);
}, function(){
    console.log("Hi Mate!")
});


// Exercise 3: Handling Events with Callbacks
let sample = document.getElementById("clickMe").addEventListener("click", function () {
    alert("Button clicked!");
});

document.getElementById("clickMe2").addEventListener("click", function(){
    alert("Second Button")
})

// Exercise 4: Looping with Callbacks
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if(callback(i) === false){
            break;
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if(index >1){
        return false;
    }
});