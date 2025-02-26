// Caculate the total cost of items
function totalCost(a,b,c){
    let totalCost =a +b +c
    return totalCost
}
console.log("The total cost of the items is: $"+totalCost(15,21,5))


// Calculate the Average of three numbers
function average(num1,num2,num3){
    let average =(num1+num2+num3)/3
    return average
}
console.log("The average is: "+average(33,14,53));

// Odd or Even Checker
function oddOrEven(num){
    let oddOrEven = num % 2
    if(oddOrEven == 0){
        console.log(num +" is an even number")
    }else{
        console.log(num+" is an odd number");
    }
}

oddOrEven(3)

// Calculate Discount
let discountOff = 20
function discount(price){
    let discountPrice = (price * discountOff)/100

    return price - discountPrice
}

console.log("The discounted price is: $"+ discount(100))

// Reverse percentage calculation
function reversePercentagePriceCal(finalPrice){
    let originalPrice = finalPrice /(1-discountOff/100)
    return originalPrice
}
console.log("The original price before the discount was: $"+reversePercentagePriceCal(80))


