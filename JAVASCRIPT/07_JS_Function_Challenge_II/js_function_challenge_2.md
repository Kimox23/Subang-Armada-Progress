##JS Function Challenge II##

_Challenge 1_
function generatePattern() {  
 let result = "";  
 for (let i = 1; i <= 3; i++) {  
 for (let j = 1; j <= i; j++) {  
 result += j + " ";  
 }  
 result += "\n";  
 }  
 return result;  
}

console.log(generatePattern());

<!--
Answer:
1
1 2
1 2 3
 -->

_Challenge 2_
function swapFirstLast(arr) {  
 let first = arr.shift();  
 let last = arr.pop();  
 arr.unshift(last);  
 arr.push(first);  
 return arr;  
}

let numbers = [10, 20, 30, 40];  
console.log(swapFirstLast(numbers));  
console.log(numbers);

<!--
Answer:
swapFirstLast = [40,20,30,10]
numbers = [40,20,30,10]
-->

_Challenge 3_
function filterPassingGrades(grades) {  
 let passing = [];  
 for (let grade of grades) {  
 if (grade >= 70) {  
 passing.push(grade);  
 } else {  
 passing.unshift(grade);  
 }  
 }  
 return passing;  
}

let scores = [85, 45, 90, 60];  
console.log(filterPassingGrades(scores));

<!--
Answer:
filterPassingGrades = [85, 90]
-->

_Challenge 4_
function updateStatus(tasks) {  
 for (let task of tasks) {  
 task.completed = !task.completed;  
 }  
 return tasks;  
}

let taskList = [
{ id: 1, completed: false },
{ id: 2, completed: true }
];

console.log(updateStatus(taskList));  
console.log(taskList);

<!--
Answer:
updatedStatus = {
            id: 1,
            completed: true
        },
        {
            id: 2,
            completed: false
        }

taskList = {
            id: 1,
            completed: true
        },
        {
            id: 2,
            completed: false
        }
-->

_Challenge 5_
function findValue(arr, target) {  
 for (let i = 0; i < arr.length; i++) {  
 if (arr[i] === target) {  
 return `Found at index ${i}`;  
 }  
 }  
 return "Not found";  
}

let data = [5, 12, 8, 130, 44];  
console.log(findValue(data, 12));  
console.log(findValue(data, 100));

<!--
Answer:
Found at index 1

Not found
-->
