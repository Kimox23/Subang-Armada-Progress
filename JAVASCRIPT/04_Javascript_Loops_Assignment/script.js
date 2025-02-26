// Multiplication Table Generator
let number = 3
for(let x = 0; x< 10;x++){
    console.log(`${number} x ${x+1} = ${number*(x+1)}`)
}

// Sum of First N Natural Numbers
let n = 10
let count = 0;
for(let i = 0; i<n;i++){
    count += i+1
}
console.log(count)

// Array Elements Printer
let arr = [3,1,7,4,2]
for(let x in arr){
    console.log("Array Element: "+arr[x])
}

// Pattern Printer
function patternPrinter(num){
    for(let x =0; x<num;x++){
        for(let y = 0; y<=x; y++){
            console.log("* ")
            // This will print the a triangle pattern but i have an issue with outputing 
            // in javascript which if the same value it wont print the exact value
        }
        console.log()
    }
}
patternPrinter(3)

// Reverse Array Elements
let arr2 = [1,5,3,7,9]
for(let i =0; i < arr2.length/2;i++){
    let temp = arr2[i]
    arr2[i] = arr2[arr2.length-1-i]
    arr2[arr2.length-1-i] = temp;
}
console.log(arr2)

