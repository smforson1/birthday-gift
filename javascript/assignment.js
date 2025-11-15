//create two variables, name and greeting. The name variable should store your name
// and the greeting should store e.g. "Hi, me name is "

// Create a third variable, myGreeting, that concatenates the two strings
//  Log myGreeting to the console

// let name = "Forson Samuel Mintah"
// let greeting = "Good day, "
// let age = 19

// let myGreeting = greeting + name 

// console.log(myGreeting)

// let wish = "I'd love to see the show \"The Lion King\" "


// // ASSIGNMENT 2 
// // create two variables, firstName and lastName
// let firstName = "Samuel"
// let lastName = "Mintah Forson"

// // Concatenate the two variables into a third variable called fullName
// let fullName = firstName + " "+ lastName

// // Log fullName to the console
// console.log(fullName)

// //Assignment 3
// let name = "Linda"
// let greeting = "Hi there"
// // create a function that logs out "Hi there, Linda!" when called

// function message (){
//     console.log(greeting+ ", " + name +"!" )
// }

// message()

// let myPoints = 3

//create the functionsm add3Points() and remove1Point(), and have them 
// add/remove points to/from the myPoints variable
// function add3Points () {
//     myPoints += 3
// }

// function remove1Point () {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// //call the functions to that the line below logs out 10
// console.log(myPoints)


// //ASSIGNMENT (IF ELSE STATEMENT)
// //check if the person is old enough to enter the night club (21)
// // log a suitable message to the console in both cases
// let age = 22

// if (age<21 ) {
//     console.log("You cannot enter the club!")
// }else{
//     console.log("You are Welcome!")
// }



//assignment 
//check if the person is eligible for a birthday card from the King: (100)

// let age = 100
// if (age<100){
//     console.log("You are not eligible for the card")
// } else if (age === 100){
//     console.log("Here is your birthday card from the King")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }


//ARRAYS - list of ordered list of items - composite / complex data type
// let featuredPosts= [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunce my portfolio"
// ]

// let experience = ["CEO at Speedy Studios", "Frontend developer at Xeneta", "People counter for Norstat"]

// // Make the following appear in the console:
// // Frontend developer at Xenta
// // People counter for Norstat
// // CEO at Speedy Studios

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// let mySelf = ["Samuel Mintah Forson", 19, true]

// Array.push() and pop()
// example 1
// let cards = [7, 4]
// cards.push(6)
// console.log(cards)

//example 2
// let messages = [
//     "Hey, how's it going",
//     "I'm great, thank you! How about you",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear"
// ]

// for (let i=0; i<messages.length; i++){
//     console.log(messages[i])
// }

// let newMessage= "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)

//LOOPS
// for (let count=10; count<=20; count+=1){
//     console.log(count)
// }

// for (let i=10; i<=100; i+=10) {
//     console.log(i)
// }


// let cards = [7, 3, 9]
// let i = 0
// for (i=0; i<cards.length; i++){
//     console.log(cards[i])
// }



// function getFastestRaceTime(){
//     if (player1Time <player2Time){
//         return player1Time
//     }else if (player2Time < player1Time){
//         return player2Time
//     }else {
//         return player1Time
//     }
// }

// Write a function that returns the total race time
// call/invoke the function and store the returned value in a new variable
// finally, log the variable out

// let player1Time = 102
// let player2Time = 107
// function totalRaceTime (){
//     return player1Time+player2Time
// }

// let total = totalRaceTime()
// console.log(total)

//RANDOM NUBERS
// let randomNumber= Math.random()*6
// console.log(randomNumber)

// let flooredNumber = Math.floor(3.5345345)
// console.log(flooredNumber)

// let random = Math.floor(Math.random()*6) + 1 
// console.log(random)

//logical operators

// let hasCompletedCourse = true
// let giveCertificate = true

// if (hasCompletedCourse && giveCertificate ) {
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generating certificate....")
// }

// //challenge
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// //create an if statement that checks that both variables are false
// // if so, run the showSolution() function

// if (hasSolvedChallenge===false  && hasHintsLeft===false){
//     showSolution()
// } else{
//     console.log("You are lost in the Jungle")
// }

// function showSolution(){
//     console.log("Showing the solution...")
// }

// //challenge
// //create two variablesm likesDocumentaries and likesStarups
// // Use an OR statement to call the recommendMovie function if those variables are true

// let likesDocumentaries = true 
// let likesStarups = false

// if (likesDocumentaries || likesStarups){
//     recommendMovie()
// }

// function recommendMovie (){
//     console.log("Hey, check out this new file we think you will like!")
// }


//OBJECTS- store data in-depth - composite / complex data type
// key - value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html","css"]
// }

// console.log(course.tags)

// //challenge

// let castle = {
//     title: "Live like a king in my castle",
//     price: "199",
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/castle2.png"]
// }

// console.log(castle.isSuperHost)
// console.log(castle.price)



