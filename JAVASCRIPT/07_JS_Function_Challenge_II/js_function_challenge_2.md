# JS Function Challenge II

1. _Challenge 1_

```
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
```

For Function generatePatter

| Logic / Variable                                                | Input / Process           |
| --------------------------------------------------------------- | ------------------------- |
| result                                                          | ""                        |
| forLoop Row                                                     | for(let i = 0; i<=3; i++) |
| forLoop Column                                                  | for(let j=1; j <=i; j++)  |
| Setting Result in the nested forloop                            | result ++ j + " "         |
| Setting a newline inside the loop in row of the result varialbe | result += "\n"            |
| Returning the result value                                      | return result             |

Call the function
| Logic / Variable | Input / Process |
| --------------------------------------------------------------- | ------------------------- |
|console.log|generatePattern()|

    Output:
        1
        1 2
        1 2 3

2. _Challenge 2_

```
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
```

For swapFirstLast Function

| Logic / Variable           | Input / Process   |
| -------------------------- | ----------------- |
| first                      | arr.shift()       |
| last                       | arr.pop()         |
| unshift data in arr        | arr.unshift(last) |
| push data in arr           | arr.push(first)   |
| returning the value of arr | return arr        |

Testing the function
| Logic / Variable | Input / Process |
| ---------------- | --------------------- |
| number | [10,20,30,40] |
| console.log | swapFirstLast(number) |
| console.log | number |

    Output:
        swapFirstLast = [40,20,30,10]
        numbers = [40,20,30,10]

3. _Challenge 3_

```
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
```

For filterPassingGradesFunction
| Logic / Variable | Input / Process |
| -------------------------------------------------------- | ------------------------ |
| passing | [] |
| forLoop function for grades | for(let grade of grades) |
| Using conditional Statement for the grade if grade >= 70 | passing.push(grade) |
| else | passing.unshift(grade) |
| returning the passing array | return passing |

Testing the function
| Logic / Variable | Input / Process |
| --------------------------------------------------------------- | ------------------------- |
|scores|[85,45,90,60]|
|console.log|filterPassingGrades(scores)|

    Output:
        filterPassingGrades = [85, 90]

4. _Challenge 4_

```
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
```

For updatedStatus Function
| Logic / Variable | Input / Process |
| ---------------------------------------------- | ---------------------- |
| Adding forloop for the task with its length | for(let task of tasks) |
| Reversing the value of task.completed as false | !task.completed |
| returning the value of tasks | return tasks |

Testing the function

| Logic / Variable | Input / Process                                   |
| ---------------- | ------------------------------------------------- |
| taskList         | [{id:1, completed:false},{id:2, completed: true}] |
| console.log      | updateStatus(taskList)                            |
| console.log      | taskList                                          |

    Output:
        updatedStatus = {id: 1, completed: true},{ id: 2, completed: false }

        taskList = { id: 1, completed: true }, { id: 2, completed: false }

5. _Challenge 5_

```
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
```

For findValue Function
| Logic / Variable | Input / Process |
| --------------------------------------------------------------- | ------------------------- |
|Adding forloop using the arr parameter of the findvalue function| for(let i=0;i<arr.length;i++)|
|Conditional Statement if arr[i] is equal to target| if(arr[i]===target) {return `Found at index ${i}`}|
|If not found| return "Not found"|

Testing the function
| Logic / Variable | Input / Process |
| --------------------------------------------------------------- | ------------------------- |
|data|[5,12,8,130,44]|
|console.log|findValue(data, 12)|
|console.log|findValue(data, 100)|

    Output:

        Found at index 1

        Not found
