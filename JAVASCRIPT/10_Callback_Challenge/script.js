// Custom Map Function
function customMap(arr, callback) {
  for (let x = 0; x < arr.length; x++) {
    arr[x] = callback(arr[x]);
  }
  return arr;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) {
  return num * 2;
});
console.log(doubled); // Should output: [2,4,6]

// Filter Function
function filter(arr, callback) {
  //Refactored filter function into creating filteredArr
  let filteredArr = [];
  for (let x in arr) {
    if (callback(arr[x])) {
      filteredArr.push(arr[x]);
    }
  }
  return filteredArr;
}

let result = filter([1, 2, 3, 4, 15], function (val) {
  return val > 10;
});
console.log(result); // Should output: [1,2,3,4]

// Some Function
function some(arr, callback) {
  let output = false;
  for (let x in arr) {
    if (callback(arr[x])) {
      output = true;
    }
  }
  return output;
}
let result2 = some([1, 2, 3, 4], function (val) {
  return val > 5;
});
console.log(result2); // Should output: true

// Every Function
function every(arr, callback) {
  let output = false;
  for (let x in arr) {
    if (callback(arr[x])) {
      output = true;
    } else {
      output = false;
    }
  }
  return output;
}
let result3 = every([1, 2, 3], function (val) {
  return val > 0;
});
console.log(result3); // Should output: true

// Reduce Function
function reduce(arr, callback) {
  let total = 0;
  for (let x in arr) {
    total += callback(0, arr[x]);
  }
  return total;
}
let sum = reduce([1, 2, 3], function (acc, num) {
  return acc + num;
});
console.log(sum); // Should output: 6

// Include Function
function includes(arr, callback) {
  for (let x in arr) {
    if (callback(arr[x])) {
      return true;
    }
  }
  return false;
}
let result4 = includes([1, 2, 3], function (val) {
  return val === 2;
});
console.log(result4); // Should output: true
