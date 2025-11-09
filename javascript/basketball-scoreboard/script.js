let homeScore = 0
let guestScore = 0

function addScore (team, score) {
    if (team === "home") {
        homeScore += score
        document.getElementById("home-score").textContent = homeScore
    }

    else {
        guestScore += score
        document.getElementById("guest-score").textContent = guestScore
    }
}