let player = {
    name: "Sam",
    chips: 132
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+ ": $"+ player.chips

let messageEl = document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

function getRandomCard () {
    let random = Math.floor(Math.random()*13) + 1
    if (random>10){
        return 10
    }else if (random === 1){
        return 11
    }else {
        return random
    }
    

}
function renderGame () {
    cardsEl.textContent = "Cards: "

    for (let i=0;i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack 🥳!!!"
        hasBlackJack = true
    } else {
        message = "You lost the game 😩"
        isAlive = false
    }

    messageEl.textContent = message
    
    
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard () {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card) 
        renderGame()
    }
    
}

