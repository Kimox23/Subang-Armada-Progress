// Challenge 1:
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4];
  console.log("Sum:", calculateSum(numbers));
  
  // Answer: 10
  // The first challenge calculate the total sum of an array based
  // on its element in an array and length of an array. Once it is
  // done it will return the sum variable.
  
  
  // Challenge 2:
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
  // Answer: true, false, true
  // The second challenge use a modulus operation by 2 to know the  
  // value if it is an even number and and odd number
  
  // Challenge 3:
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
  // Answer: 
  // Hello Alice !
  // Hello Bob !
  // Hello Charlie !
  // The third challenge use to function which are greet with a parameter name that returns a string that will greet and personalizedGreeting
  // with a parameter names as an array for looping purposes to greet all
  // the names 
  
  
  // Challenge 4:
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
  // Answer: reverseArray = [30,20,10]; originalArray = [10,20,30]
  // The fourth challenge has a function for reversing an array with a parameter of arr.
  // Inside the function has a variable reverse as an array to put the reverse value.
  // After that The is a looping function to put the value of arr in reverse and if the loop
  // is done it returns the reversed array
  
  // Challenge 5:
  function multiplyMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] *= 2;
      }
    }
    return matrix;
  }
  
  let matrix = [
    [1, 2],
    [3, 4],
  ];
  console.log(multiplyMatrix(matrix));
  
  // Answer: 
  // [2,4],
  // [6,8]
  // The fifth challenge used a nested looping for a matrix problems or solutions
  // inside of it has row and columns with its length as a basis when looping their values
  