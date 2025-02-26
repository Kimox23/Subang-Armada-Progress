// Model a  real-world entity using an object
let book = {
    title: "Solo Leveling",
    author: "Chung Mung",
    pages: 1500,
    isRead: true
}
console.log("Book title"+ book.title+"\nAuthor: "+book.author+"\nPages: "+book.pages+"\nisRead: "+book.isRead)
console.log(book)
book.isRead = false
console.log(book.isRead)

// Create and Modify an Array of Objects

let movie=[
    {
        title: "Bla bla bla",
        director:"I don't know",
        year: 2022
    },{
        title: "Another movie",
        director: "Sample Director",
        year: 2021
    },{
        title: "Movie 3",
        director: "Steve Jobs",
        year: 2024
    }

]
console.log(movie[1].title)
movie.push({title: "Finding Dori",director:"Hehe",year:2022})
console.log(movie[3])
movie[0].year = 2023
console.log(movie)

// Combine objects and arrays
let student = {
    name: "Kim",
    age: 22,
    subject: ["HTML","CSS","Javascript"]
}
console.log(student.subject[0])
student.subject.push("Tailwind CSS")
console.log(student)

// Challenge Task
let recipe = {
    name: "Spagetti",
    ingredients: [{name:"Noodles", quantity: 2},{name:"Sauce",quantity: 5}],
    isVegetarian: true
}

recipe.ingredients.push({name: "Hotdogs",quantity: 4})
console.log(recipe.ingredients[1])
console.log(recipe)