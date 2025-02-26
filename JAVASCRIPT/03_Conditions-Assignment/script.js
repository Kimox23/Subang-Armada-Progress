// Grading System
let score = 80

if(score >=90 && score <=100){
    console.log("Grade A")
}else if(score <=89 && score >=80){
    console.log("Grade B")
}else if (score <=79 && score >=70){
    console.log("Grade C")
}else if (score <=69&&  score >=60){
    console.log("Grade D")
}else if (score <=59){
    console.log("Grade F")
}else{
    console.log("Not in the grading system")
}

// Weather Advisor
let temperature = -5;

if(temperature >30){
    console.log("It's hot outside. Stay hydreated!")
}else if(temperature<=30 && temperature >=15){
    console.log("The weather is nice. Enjoy your day!")
}else if(temperature<=15&& temperature >=0){
    console.log("It's cold outside. Wear a jacket.")
}else if(temperature<0){
    console.log("IT's freezing outside! Bundle up!")
}

// Eligibiilty Checker
let age = 10;
if(age<13){
    console.log("You are too young for this activity")
}else if(age<=17){
    console.log("You need parental permission")
}else{
    console.log("You are eligible for this activity")
}

// Ticket Price Calculator
let person = {
    age: 15,
    isMember: true
}
if(person.age <12){
    console.log("The ticket is free")
}else if(person.age >=12 && person.isMember){
    console.log("The ticket costs $10")
}else{
    console.log("The ticket cost $15")
}

// Challenge Task Leap Year Checker
function isLeapYear(year){
    let isDecimal = year % 100
    if(year % 4 == 0 && !isNaN(parseFloat(isDecimal))){
      return true; 
    }else{
        return false;
    }
}
console.log(isLeapYear(2024))