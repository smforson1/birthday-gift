//create a person object that contains three keys: name, age and country
//Use yourself as an example to set the values for the name age and country

// let person = {
//     name: "Samuel",
//     age: 19,
//     country: "Ghana"
// }

// //create a function, logData(), that uses the person object to create a 
// //string in the following format:
// //"Per is 35 years old and lives in Norway"

// function logData (){
//     console.log(person.name +" is "+ person.age + " years old and lives in "+ person.country) 
// }

// //call the logData() function to verify that it works
// logData()


// // practicing conditional statements

// let age = 55
// if (age < 6 ){
//     console.log("Keep your money, we got you covered!")
// }else if (age >= 6 && age <= 17){
//     console.log("You have a child discount and hence pay less!")
// }else if (age >= 18 && age<= 26){
//     console.log("You have a student discount!")
// }else if (age >=27 && age<=66){
//     console.log("You do not have any discount. You are required to pay in full")
// }else if (age > 66){
//     console.log("You have a senior citizen discount")
// }

// //practicing for loops 

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// /* Use a for loop to log the following to the console

// The 5 largest countries in the world:
// - China
// - India
// - United States
// -Indonesia
// -Pakistan
// */ 

// console.log("The 5 largest countries in the world \n")
// for (let i=0; i<largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }


//push, pop, unshift, shift challenge
//  let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

//  largeCountries.pop()
//  largeCountries.push("Pakistan")
//  largeCountries.shift()
//  largeCountries.shift()
//  largeCountries.unshift("China")
//  console.log(largeCountries)


//  let hands = ["rock", "paper", "scissor"]

//  function getHand () {
//     let i =Math.floor(Math.random()*3) 
//     return hands[i]
//  }
// console.log(getHand())


let fruit = ["🍎", "🍊","🍎","🍊","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

//Create a function that puts the apples onto the appleShelf
// and oranges on to the orangeShelf. Use a for loop,
// a conditional statement, and textContent property.

function sortFruit(){
    for (let i=0; i<fruit.length; i++){
        if (fruit[i] === "🍊"){
            orangeShelf.textContent += "🍊"
        } else if (fruit[i]==="🍎"){
            appleShelf.textContent += "🍎"
        }
    }
}

sortFruit()