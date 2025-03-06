# JS Function Challenge I

1. _Challenge 1_

```
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));
```

For CalculateSum Function
|Logic / Variable| Input / Process|
|---|---|
|sum| 0|
|forLoop|(let i =0; i< arr.length;i++)|
|calculating the total sum in an arr|sum+= arr[i]|
|return | sum|

Using the function
|Logic / Variable| Input / Process|
|---|---|
|numbers| [1,2,3,4]|
|console.log| ("Sum: ", calculateSum(numbers))|

    Output: 10

The first challenge calculate the total sum of an array based on its element in an array and length of an array. Once it is done it will return the sum variable.

2. _Challenge 2_

```
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
```

For isEven Function
|Logic / Variable| Input / Process|
|---|---|
|Conditional Statement if the num % 2 === 0| if(num%2 ===0) return true;|
|else| return false;|

Logging the output
|Logic / Variable| Input / Process|
|---|---|
|console.log|isEven(4)|
|console.log|isEven(7)|
|console.log|isEven(0)|

    Output: true, false, true

The second challenge use a modulus operation by 2 to know the value if it is an even number and and odd number

3. _Challenge 3_

```
function greet(name) {
    return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(greet(names[i]));
    }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
```

For greet Function
|Logic / Variable| Input / Process|
|---|---|
|name|"Hello, "+ name + "!"|

For personalizedGreeting(names)
|Logic / Variable| Input / Process|
|---|---|
|For Loop| for(let i = 0; i < names.length; i++)|
|console.log|greet(names[i])|

Logging the output
|Logic / Variable| Input / Process|
|---|---|
|friends|["Alice","Bob","Charlie"]|
|calling the function PersonalizedGreeting| personalizedGreeting(friends)|

    Output:
        Hello Alice !
        Hello Bob !
        Hello Charlie !

The third challenge use to function which are greet with a parameter name that returns a string that will greet and personalizedGreeting with a parameter names as an array for looping purposes to greet all the names

4. _Challenge 4_

```
function reverseArray(arr) {
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
    }
return reversed;
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);
```

For reverseArray Function
|Logic / Variable| Input / Process|
|---|---|
|reversed| []|
|Using for loop to reverse| for(let i = arr.length-1; i >=0; i--)|
|push the Array reversed inside the reversed[]| reversed.push(arr[i])|
|return| reversed|

Logging the Output
|Logic / Variable| Input / Process|
|---|---|
|originalArray|[10,20,30]|
|console.log|reversedArray(originalArray)|
|console.log|originalArray|

    Output: reverseArray = [30,20,10]; originalArray = [10,20,30]

The fourth challenge has a function for reversing an array with a parameter of arr.
Inside the function has a variable reverse as an array to put the reverse value.
After that The is a looping function to put the value of arr in reverse and if the loop
is done it returns the reversed array

5. _Challenge 5_

```
function multiplyMatrix(matrix) {
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] \*= 2;
        }
    }
    return matrix;
}

let matrix = [[1, 2],[3, 4]];
console.log(multiplyMatrix(matrix));
```

For MultiplyMatrix Function
|Logic / Variable| Input / Process|
|---|---|
|forLoop Row|for(let i = 0; i<matrix.length; i++)|
|forLoop Column|for(let j = 0; j<matrix[i].length; j++)|
|Multiply Matrix by 2| matrix[i][j] \*= 2|
|return|matrix|

Logging the output
|Logic / Variable| Input / Process|
|---|---|
|matrix| [[1,2],[3,4]]|
|console.log|multiplyMatrix(matrix)|

    Output:
    [2,4],
    [6,8]

The fifth challenge used a nested looping for a matrix problems or solutions inside of it has row and columns with its length as a basis when looping to get the data in it or do the operation
